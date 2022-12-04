import type { MetaFunction, DataFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { MicroCMSDate } from "microcms-js-sdk";
import styles from "~/styles/content.css";
import { microcmsApi } from "~/api/microcms";
import type { Content } from "~/api/microcms/types";
import { ContentViewer } from "~/components/ContentViewer";
import { Container } from "~/components/Container";
import { Footer } from "~/components/Footer";
import { getEnglishDate } from "~/utils/getEnglishDate";
import { Spacer } from "~/components/Spacer";
import { Bio } from "~/components/Bio";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction<typeof loader> = ({ data }) => ({
  title: data.title,
  description: data.content.replace(/(<([^>]+)>)/gi, "").slice(0, 50),
  "og:url": `https://apple-yagi.me/blog/${data.id}`,
  "og:title": `${data.title}`,
  "og:description": data.content.replace(/(<([^>]+)>)/gi, "").slice(0, 50),
  "og:image": data.eyecatch.url,
  "og:site_name": "apple-yagi",
  "twitter:card": data.eyecatch.url ? "summary_large_image" : "summary",
  "twitter:creator": "@apple_yagi",
  "twitter:site": "@apple_yagi",
});

export const loader = async ({ params }: DataFunctionArgs) => {
  const content = await microcmsApi.blogs._id(params.contentId as string).$get();
  content.publishedAt = getEnglishDate(new Date(content.publishedAt || ""));
  return json(content);
};

export default function $ContentId() {
  const content = useLoaderData<Content & MicroCMSDate>();

  return (
    <Container className="px-6">
      <header className="py-4 flex gap-2 text-md">
        <a href="/">Home 🏠</a>
        <span className="text-gray-500">{`>`}</span>
        <span>📝</span>
      </header>
      <div className="text-center pb-6 border-b border-gray-600">
        <h1 className="text-2xl pt-10 py-5">{content.title}</h1>
        <div>
          <div className="text-gray-400 text-sm">Published</div>
          <time className="text-sm">{content.publishedAt || ""}</time>
        </div>
      </div>
      <Spacer size={10} />
      <ContentViewer text={content.content || ""} />
      <Spacer size={20} />
      <Bio />
      <Footer />
    </Container>
  );
}
