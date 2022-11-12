import { json, LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { fetchZeenFeed } from "~/api/zenn";
import type { ZeenFeed } from "~/api/zenn/types";
import { Container } from "~/components/Container";
import { Spacer } from "~/components/Spacer";
import { TimelineCard } from "~/components/TimelineCard";
import { API_FETCH_KV_KEY } from "~/consts/kv";

export const meta: MetaFunction = () => ({
  title: "Timeline | apple-yagi",
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

export default function Timeline() {
  const zennFeed = useLoaderData<ZeenFeed>();

  return (
    <Container className="px-6">
      <Spacer size={16} />
      <h1 className="text-4xl text-center font-bold">Timeline</h1>
      <Spacer size={16} />
      <div className="flex flex-col gap-8">
        {zennFeed.items.map((item, i) => (
          <div className="flex justify-center" key={i}>
            {Boolean(i % 2) && <Spacer className="hidden sm:block" size={48} />}
            <TimelineCard item={item} loading={i < 3 ? "eager" : "lazy"} />
            {!Boolean(i % 2) && (
              <Spacer className="hidden sm:block" size={48} />
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
