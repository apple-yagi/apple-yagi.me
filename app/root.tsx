import type { MetaFunction } from "@remix-run/cloudflare";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import styles from "./styles/generated.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "apple-yagi",
  description: "Personal website of apple-yagi.",
  viewport: "width=device-width,initial-scale=1",
  "og:url": "https://apple-yagi.me",
  "og:title": "apple-yagi",
  "og:description": "Personal website of apple-yagi.",
  "og:image": "https://storage.apple-yagi.me/apple-yagi-top-ogp.jpg",
  "og:site_name": "apple-yagi",
  "twitter:card": "summary_large_image",
  "twitter:creator": "@apple_yagi",
  "twitter:site": "@apple_yagi",
});

export default function App() {
  return (
    <html lang="ja">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="text-primary bg-primary font-primary">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
