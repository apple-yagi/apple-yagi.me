import { GitHubIcon } from "./icons/GitHubIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { ZennIcon } from "./icons/ZennIcon";
import { Image } from "./Image";

export const Bio = () => (
  <div className="pt-16 flex flex-col items-center border-t border-gray-600">
    <Image
      className="rounded-full aspect-square w-24 h-24"
      imageName="apple-yagi.jpg"
      alt="apple-yagi"
      loading="eager"
      width={100}
      height={100}
    />
    <div className="flex gap-4 pt-5">
      <a href="https://twitter.com/apple_yagi">
        <TwitterIcon fill="#1DA1F2" width={24} height={24} />
      </a>
      <a href="https://github.com/apple-yagi">
        <GitHubIcon width={24} height={24} />
      </a>
      <a href="https://zenn.dev/apple_yagi">
        <ZennIcon width={24} height={24} />
      </a>
      <a href="https://qiita.com/apple-yagi">
        <Image imageName="qiita.png" alt="Qiita" width={24} height={24} loading="eager" aria-label="Qiita" />
      </a>
    </div>
  </div>
);
