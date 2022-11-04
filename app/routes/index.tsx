import { MetaFunction } from "@remix-run/cloudflare";
import { Container } from "~/components/Container";
import { Profile } from "~/components/Profile";
import { SocialLinks } from "~/components/SocialLinks";
import { Spacer } from "~/components/Spacer";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "apple-yagi",
  viewport: "width=device-width,initial-scale=1",
});

export default function Index() {
  return (
    <Container className="px-6">
      <Spacer size={16} />
      <Profile />
      <Spacer size={16} />
      <SocialLinks />
    </Container>
  );
}
