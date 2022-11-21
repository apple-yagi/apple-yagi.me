import { parseStringPromise } from "xml2js";
import { TimelineItem } from "~/components/TimelineCard";

const URL = "https://zenn.dev/apple_yagi/feed";

export const fetchZeenFeed = async (): Promise<TimelineItem[]> => {
  const xml = await (await fetch(URL)).text();
  let {
    rss: { channel },
  } = await parseStringPromise(xml);

  channel = channel[0];

  return Array.from(channel.item).map((item: any) => ({
    title: item.title[0],
    pubDate: new Date(item.pubDate[0]).toLocaleDateString("ja-JP"),
    link: item.link[0],
    kind: "Zenn",
  }));
};
