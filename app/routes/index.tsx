import { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { microcmsApi } from "~/api";
import { Content } from "~/api/types";
import { Container } from "~/components/Container";
import { GitHubIcon } from "~/components/icons/GitHubIcon";
import { QiitaIcon } from "~/components/icons/QiitaIcon";
import { TwitterIcon } from "~/components/icons/TwitterIcon";
import { ZennIcon } from "~/components/icons/ZennIcon";
import { LinkItem } from "~/components/LinkItem";
import { SocialLinks } from "~/components/SocialLinks";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "apple-yagi",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async () => {
  return await microcmsApi.blogs.$get({ query: { limit: 10 } });
};

export default function Index() {
  const blogs = useLoaderData<MicroCMSListResponse<Content>>();

  return (
    <Container>
      <div className="mt-24" />
      <h1 className="text-4xl font-bold text-center mb-10">
        <span className="animate-wave-hand inline-block">👋</span> Hello World
      </h1>
      <SocialLinks />
    </Container>
  );
}
