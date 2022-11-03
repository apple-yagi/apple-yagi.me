import { MetaFunction } from "@remix-run/cloudflare";
import { Container } from "~/components/Container";
import { SocialLinks } from "~/components/SocialLinks";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "apple-yagi",
  viewport: "width=device-width,initial-scale=1",
});

export default function Index() {
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
