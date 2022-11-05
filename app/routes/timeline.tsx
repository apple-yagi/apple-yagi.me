import { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { fetchFeed } from "~/api/zenn";
import type { Channel } from "~/api/zenn/types";
import { Container } from "~/components/Container";
import { Spacer } from "~/components/Spacer";
import { TimelineCard } from "~/components/TimelineCard";

export const meta: MetaFunction = () => ({
  title: "Timeline | apple-yagi",
});

export const loader: LoaderFunction = async () => {
  return fetchFeed();
};

export default function Timeline() {
  const channel = useLoaderData<Channel>();

  return (
    <Container className="px-6">
      <Spacer size={16} />
      <h1 className="text-4xl text-center font-bold">Timeline</h1>
      <Spacer size={16} />
      <div className="flex flex-col gap-6">
        {channel.items.map((item, i) => (
          <div className="flex" key={i}>
            {Boolean(i % 2) && <Spacer size={48} />}
            <TimelineCard item={item} />
            {!Boolean(i % 2) && <Spacer size={48} />}
          </div>
        ))}
      </div>
    </Container>
  );
}