import { ZeenFeedItem } from "~/api/zenn/types";

type Props = {
  item: ZeenFeedItem;
  loading?: "eager" | "lazy";
};

export const TimelineCard = ({ item, loading }: Props) => (
  <a href={item.link}>
    <div className="flex flex-col bg-secondary rounded-xl overflow-hidden hover:-translate-y-1 transition">
      <img
        className="object-contain"
        src={item.ogImage}
        loading={loading}
        width={379}
        height={198}
        alt={item.title}
      />
      <div className="p-4">
        <p className="text-sm sm:text-base">{item.title}</p>
        <span className="text-xs sm:text-sm">
          {new Date(item.pubDate).toDateString()}
        </span>
      </div>
    </div>
  </a>
);
