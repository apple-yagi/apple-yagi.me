import { imageUrl } from "~/utils/imageUrl";
import { Image } from "./Image";

export const Profile = () => (
  <div className="flex items-center sm:items-start gap-6">
    <Image
      className="rounded-full aspect-square w-24 h-24"
      imageName="apple-yagi.jpg"
      alt="apple-yagi"
      loading="eager"
      width={100}
      height={100}
    />
    <p className="text-base sm:py-4">
      <span className="animate-wave-hand inline-block leading-7">👋</span> Hello
      World
      <br />
      <span className="pl-1 leading-7">I'm software developer.</span>
    </p>
  </div>
);
