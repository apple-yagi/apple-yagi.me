import { Profile } from "~/components/Profile";
import { SocialLinks } from "~/components/SocialLinks";
import { json, LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { fetchZeenFeed } from "~/api/zenn";
import type { ZeenFeed } from "~/api/zenn/types";
import { Container } from "~/components/Container";
import { Spacer } from "~/components/Spacer";
import { TimelineCard } from "~/components/TimelineCard";
import { API_FETCH_KV_KEY } from "~/consts/kv";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "apple-yagi",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async () => {
  const cacheData = (await API_FETCH_KV.get(
    API_FETCH_KV_KEY.zennFeed,
    "json"
  )) as ZeenFeed;

  if (cacheData) {
    return json(cacheData);
  }

  const feed = await fetchZeenFeed();

  await API_FETCH_KV.put("zeen_feed", JSON.stringify(feed), {
    expirationTtl: 3600,
  });

  return feed;
};

export default function Index() {
  const zennFeed = useLoaderData<ZeenFeed>();

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
        {zennFeed.items.map((item, i) => (
          <TimelineCard key={i} {...item} />
        ))}
      </div>
    </Container>
  );
}
