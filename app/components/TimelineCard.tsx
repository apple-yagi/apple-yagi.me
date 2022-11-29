import { Link } from "@remix-run/react";
import type { ComponentPropsWithoutRef } from "react";
import { memo } from "react";
import { ZennIcon } from "./icons/ZennIcon";
import { Image } from "./Image";

export type TimelineKind = "Zenn" | "Prtimes" | "Qiita" | "MyBlog";

export type TimelineItem = {
  title: string;
  pubDate: string;
  link: string;
  kind: TimelineKind;
};

export type TimelineCardProps = TimelineItem & ComponentPropsWithoutRef<"div">;

const TimelineImage = memo(({ kind }: { kind: TimelineKind }) => {
  switch (kind) {
    case "Zenn":
      return <ZennIcon width={20} height={20} />;
    case "Prtimes":
      return <Image imageName="prtimes.png" alt="PR TIMES" width={20} height={20} loading="lazy" />;
    case "Qiita":
      return <Image imageName="qiita.png" alt="Qiita" width={20} height={20} loading="lazy" />;
    case "MyBlog":
      return (
        <Image
          className="rounded-full"
          imageName="apple-yagi.jpg"
          alt="apple-yagi.me"
          width={20}
          height={20}
          loading="lazy"
        />
      );
    default:
      return <img alt="default" />;
  }
});
TimelineImage.displayName = "TimelineImage";

export const TimelineCard = ({ title, pubDate, link, kind, className, ...props }: TimelineCardProps) => {
  const Card = () => (
    <div
      className={`flex flex-col bg-secondary rounded-xl overflow-hidden hover:-translate-y-1 transition ${
        className ?? ""
      }`}
      {...props}
    >
      <div className="p-4">
        <p className="text-sm sm:text-base">{title}</p>
        <div className="flex pt-3 gap-2 items-center">
          <TimelineImage kind={kind} />
          <span className="text-xs sm:text-sm text-gray-400 font-light">{pubDate}</span>
        </div>
      </div>
    </div>
  );

  if (kind === "MyBlog")
    return (
      <Link to={link}>
        <Card />
      </Link>
    );

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card />
    </a>
  );
};
