import { LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { microcmsApi } from "~/api";
import { Content } from "~/api/types";

export const loader: LoaderFunction = async () => {
  return await microcmsApi.blogs.$get({ query: { limit: 10 } });
};

export default function Index() {
  const blogs = useLoaderData<MicroCMSListResponse<Content>>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        {blogs.contents.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
