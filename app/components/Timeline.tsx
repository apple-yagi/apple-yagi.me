import { Fragment } from "react";
import { Spacer } from "./Spacer";
import type { TimelineItem } from "./TimelineCard";
import { TimelineCard } from "./TimelineCard";

type Props = {
  timeline: TimelineItem[];
};

export const Timeline = ({ timeline }: Props) => (
  <Fragment>
    <h2 className="text-4xl font-bold">Timeline</h2>
    <Spacer size={12} />
    <div className="flex flex-col gap-8">
      {timeline.map((item, i) => (
        <TimelineCard key={i} {...item} />
      ))}
    </div>
  </Fragment>
);
