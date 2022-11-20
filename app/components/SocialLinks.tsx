import { GitHubIcon } from "./icons/GitHubIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { ZennIcon } from "./icons/ZennIcon";
import { Image } from "./Image";
import { LinkItem } from "./LinkItem";

export const SocialLinks = () => (
  <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 flex-wrap gap-8">
    <a href="https://twitter.com/apple_yagi">
      <LinkItem className="bg-gradient-to-br from-sky-300 via-sky-500 to-blue-500">
        <TwitterIcon width={64} height={64} />
      </LinkItem>
    </a>
    <a href="https://github.com/apple-yagi">
      <LinkItem className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <GitHubIcon width={64} height={64} />
      </LinkItem>
    </a>
    <a href="https://zenn.dev/apple_yagi">
      <LinkItem className="bg-gradient-to-br from-slate-100 bg-sky-200 to-blue-300">
        <ZennIcon width={64} height={64} />
      </LinkItem>
    </a>
    <a href="https://qiita.com/apple-yagi">
      <LinkItem className="bg-gradient-to-br from-green-200 via-slate-100 to-green-300">
        <Image
          imageName="qiita.png"
          alt="Qiita"
          width={64}
          height={64}
          loading="eager"
        />
      </LinkItem>
    </a>
  </div>
);
