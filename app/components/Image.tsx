import { ComponentPropsWithRef } from "react";
import { imageUrl } from "~/utils/imageUrl";

type Props = {
  imageName: string;
} & ComponentPropsWithRef<"img">;

export const Image = ({ imageName, className, ...props }: Props) => (
  <picture>
    <source
      className={className}
      srcSet={imageUrl(`${imageName.split(".")[0]}.avif`)}
      type="image/avif"
    />
    <source
      className={className}
      srcSet={imageUrl(`${imageName.split(".")[0]}.webp`)}
      type="image/webp"
    />
    <img className={className} src={imageUrl(imageName)} {...props} />
  </picture>
);
