import { parseStringPromise } from "xml2js";
import { Timeline } from "~/components/TimelineCard";

const URL = "https://zenn.dev/apple_yagi/feed";

export const fetchZeenFeed = async (): Promise<Timeline[]> => {
  const xml = await (await fetch(URL)).text();
  let {
    rss: { channel },
  } = await parseStringPromise(xml);

  channel = channel[0];

  return Array.from(channel.item).map((item: any) => ({
    title: item.title[0],
    pubDate: item.pubDate[0],
    link: item.link[0],
  }));
};
