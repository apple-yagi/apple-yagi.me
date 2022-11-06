export type ZeenFeed = {
  title: string;
  description: string;
  link: string;
  authorImage: string;
  lastBuildDate: string;
  items: ZeenFeedItem[];
};

export type ZeenFeedItem = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  ogImage: string;
};
