import { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { fetchFeed } from "~/api/zenn";
import type { Channel } from "~/api/zenn/types";
import { Container } from "~/components/Container";
import { Spacer } from "~/components/Spacer";

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
      {channel.items.map((item) => (
        <div>{item.title}</div>
      ))}
    </Container>
  );
}
