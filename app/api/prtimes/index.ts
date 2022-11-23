import { parseStringPromise } from "xml2js";
import type { TimelineItem } from "~/components/TimelineCard";
import { getEnglishDate } from "~/utils/getEnglishDate";

const URL = "https://developers.prtimes.jp/author/ryuyayanagi/feed/";

export const fetchPrtimesFeed = async (): Promise<TimelineItem[]> => {
  const xml = await (await fetch(URL)).text();
  let {
    rss: { channel },
  } = await parseStringPromise(xml);

  channel = channel[0];

  return Array.from(channel.item).map((item: any) => ({
    title: item.title[0],
    pubDate: getEnglishDate(new Date(item.pubDate[0])),
    link: item.link[0],
    kind: "Prtimes",
  }));
};
