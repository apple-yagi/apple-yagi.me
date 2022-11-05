import { Item } from "~/api/zenn/types";

type Props = {
  item: Item;
};

export const TimelineCard = ({ item }: Props) => (
  <div className="flex flex-col bg-secondary rounded-xl overflow-hidden">
    <img
      className="object-contain"
      src={item.ogImage}
      loading="lazy"
      width="100%"
      alt={item.title}
    />
    <div className="p-4">
      <p>{item.title}</p>
    </div>
  </div>
);
