import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { SocialLinks } from "~/components/SocialLinks";
import { Profile } from "~/components/Profile";
import { fetchZeenFeed } from "~/api/zenn";
import { Container } from "~/components/Container";
import { Spacer } from "~/components/Spacer";
import type { TimelineItem } from "~/components/TimelineCard";
import { API_FETCH_KV_KEY } from "~/consts/kv";
import { fetchPrtimesFeed } from "~/api/prtimes";
import { fetchQiitaFeed } from "~/api/qiita";
import { Timeline } from "~/components/Timeline";
import { fetchMicrocms } from "~/api/microcms";
import { Footer } from "~/components/Footer";

export const loader: LoaderFunction = async () => {
  const cacheData = (await API_FETCH_KV.get(API_FETCH_KV_KEY.timeline, "json")) as TimelineItem[];

  if (cacheData) {
    return json(cacheData);
  }

  const promiseList = await Promise.all([fetchZeenFeed(), fetchPrtimesFeed(), fetchQiitaFeed(), fetchMicrocms()]);

  const timeline = promiseList
    .flat()
    .sort((a, b) => (new Date(a.pubDate).getTime() > new Date(b.pubDate).getTime() ? -1 : 1));

  await API_FETCH_KV.put(API_FETCH_KV_KEY.timeline, JSON.stringify(timeline), {
    expirationTtl: 3600,
  });

  return json(timeline);
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
