export type Channel = {
  title: string;
  description: string;
  link: string;
  authorImage: string;
  lastBuildDate: string;
  items: Item[];
};

export type Item = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  ogImage: string;
};
