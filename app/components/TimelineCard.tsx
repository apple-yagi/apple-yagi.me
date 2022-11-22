import { ComponentPropsWithoutRef, memo } from "react";
import { ZennIcon } from "./icons/ZennIcon";
import { Image } from "./Image";

export type TimelineKind = "Zenn" | "Prtimes" | "Qiita";

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
      return (
        <Image
          imageName="prtimes.png"
          alt="PR TIMES"
          width={20}
          height={20}
          loading="lazy"
        />
      );
    case "Qiita":
      return (
        <Image
          imageName="qiita.png"
          alt="Qiita"
          width={20}
          height={20}
          loading="lazy"
        />
      );
  }
});

export const TimelineCard = ({
  title,
  pubDate,
  link,
  kind,
  className,
  ...props
}: TimelineCardProps) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
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
          <span className="text-xs sm:text-sm text-gray-400 font-light">
            {pubDate}
          </span>
        </div>
      </div>
    </div>
  </a>
);
