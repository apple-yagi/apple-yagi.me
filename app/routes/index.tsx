import { Profile } from "~/components/Profile";
import { SocialLinks } from "~/components/SocialLinks";
import { json, LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { fetchZeenFeed } from "~/api/zenn";
import { Container } from "~/components/Container";
import { Spacer } from "~/components/Spacer";
import { TimelineCard, TimelineItem } from "~/components/TimelineCard";
import { API_FETCH_KV_KEY } from "~/consts/kv";
import { fetchPrtimesFeed } from "~/api/prtimes";
import { Footer } from "~/components/Footer";
import { fetchQiitaFeed } from "~/api/qiita";
import { Timeline } from "~/components/Timeline";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "apple-yagi",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async () => {
  const cacheData = (await API_FETCH_KV.get(
    API_FETCH_KV_KEY.timeline,
    "json"
  )) as TimelineItem[];

  if (cacheData) {
    return json(cacheData);
  }

  const promiseList = await Promise.all([
    fetchZeenFeed(),
    fetchPrtimesFeed(),
    fetchQiitaFeed(),
  ]);

  const timeline = promiseList
    .flat()
    .sort((a, b) =>
      new Date(a.pubDate).getTime() > new Date(b.pubDate).getTime() ? -1 : 1
    );

  await API_FETCH_KV.put(API_FETCH_KV_KEY.timeline, JSON.stringify(timeline), {
    expirationTtl: 3600,
  });

  return timeline;
};

export default function Index() {
  const timeline = useLoaderData<TimelineItem[]>();

  return (
    <Container className="px-6">
      <Spacer size={16} />
      <Profile />
      <Spacer size={16} />
      <SocialLinks />
      <Spacer size={24} />
      <Timeline timeline={timeline} />
      <Footer />
    </Container>
  );
}
