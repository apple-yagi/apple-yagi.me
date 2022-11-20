import { ZennIcon } from "./icons/ZennIcon";

export type TimelineCardProps = {
  title: string;
  pubDate: string;
  link: string;
};

export const TimelineCard = ({ title, pubDate, link }: TimelineCardProps) => (
  <a href={link}>
    <div className="flex flex-col bg-secondary rounded-xl overflow-hidden hover:-translate-y-1 transition">
      <div className="p-4">
        <p className="font-medium text-sm sm:text-base">{title}</p>
        <div className="flex pt-3 gap-2">
          <ZennIcon width={20} height={20} />
          <span className="text-xs sm:text-sm">
            {new Date(pubDate).toDateString()}
          </span>
        </div>
      </div>
    </div>
  </a>
);
