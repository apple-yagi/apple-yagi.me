import { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { microcmsApi } from "~/api";
import { Content } from "~/api/types";

export const loader: LoaderFunction = async ({ params }) => {
  return await microcmsApi.blogs.$get({ query: { ids: params.contentId } });
};

export default function Content() {
  const blog = useLoaderData<MicroCMSListResponse<Content>>();

  return (
    <div>
      <h1>{blog.contents[0].title}</h1>
    </div>
  );
}
