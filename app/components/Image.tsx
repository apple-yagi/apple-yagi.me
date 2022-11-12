import { ComponentPropsWithRef } from "react";
import { imageUrl } from "~/utils/imageUrl";

type Props = {
  imageName: string;
} & ComponentPropsWithRef<"img">;

export const Image = ({ imageName, className, ...props }: Props) => {
  const [name, ext] = imageName.split(".");
  const isNotPng = ext !== "png";

  return (
    <picture>
      {isNotPng && (
        <source
          className={className}
          srcSet={imageUrl(`${name}.avif`)}
          type="image/avif"
        />
      )}
      <source
        className={className}
        srcSet={imageUrl(`${name}.webp`)}
        type="image/webp"
      />
      <img className={className} src={imageUrl(imageName)} {...props} />
    </picture>
  );
};
