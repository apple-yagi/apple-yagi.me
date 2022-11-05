import { parseStringPromise } from "xml2js";
import { Channel } from "./types";

const URL = "https://zenn.dev/apple_yagi/feed";

export const fetchFeed = async (): Promise<Channel> => {
  const xml = await (await fetch(URL)).text();
  let {
    rss: { channel },
  } = await parseStringPromise(xml);

  channel = channel[0];

  return {
    title: channel.title[0],
    description: channel.description[0],
    link: channel.link[0],
    authorImage: channel.image[0].url[0],
    lastBuildDate: channel.lastBuildDate[0],
    items: Array.from(channel.item).map((item: any) => ({
      title: item.title[0],
      description: item.description[0],
      link: item.link[0],
      pubDate: item.pubDate[0],
      ogImage: item.enclosure[0]["$"]["url"],
    })),
  };
};
