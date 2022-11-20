import { Profile } from "~/components/Profile";
import { SocialLinks } from "~/components/SocialLinks";
import { json, LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { fetchZeenFeed } from "~/api/zenn";
import { Container } from "~/components/Container";
import { Spacer } from "~/components/Spacer";
import { Timeline, TimelineCard } from "~/components/TimelineCard";
import { API_FETCH_KV_KEY } from "~/consts/kv";
import { fetchPrtimesFeed } from "~/api/prtimes";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "apple-yagi",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async () => {
  const cacheData = (await API_FETCH_KV.get(
    API_FETCH_KV_KEY.timeline,
    "json"
  )) as Timeline[];

  if (cacheData) {
    return json(cacheData);
  }

  const zennFeeds = await fetchZeenFeed();
  const prtimesFeeds = await fetchPrtimesFeed();
  const timeline = [...zennFeeds, ...prtimesFeeds].sort((a, b) =>
    a.pubDate > b.pubDate ? -1 : 1
  );

  await API_FETCH_KV.put(API_FETCH_KV_KEY.timeline, JSON.stringify(timeline), {
    expirationTtl: 3600,
  });

  return timeline;
};

export default function Index() {
  const timelines = useLoaderData<Timeline[]>();

  return (
    <Container className="px-6">
      <Spacer size={16} />
      <Profile />
      <Spacer size={16} />
      <SocialLinks />
      <Spacer size={24} />
      <h2 className="text-4xl font-bold">Timeline</h2>
      <Spacer size={12} />
      <div className="flex flex-col gap-8">
        {timelines.map((timeline, i) => (
          <TimelineCard key={i} {...timeline} />
        ))}
      </div>
      <Footer />
    </Container>
  );
}
