import { TimelineItem } from "~/components/TimelineCard";

const URL =
  "https://qiita.com/api/v2/items?page=1&per_page=100&query=user%3Aapple-yagi";

export const fetchQiitaFeed = async (): Promise<TimelineItem[]> => {
  const items = (await (await fetch(URL)).json()) as any;

  return Array.from(items).map((item: any) => ({
    title: item.title,
    pubDate: new Date(item.created_at).toLocaleDateString("ja-JP"),
    link: item.url,
    kind: "Qiita",
  }));
};
