import { RawImage } from "@/types/image";
import { getAssetMetadata } from ".";

type ValidCantoSize = 100 | 240 | 320 | 500 | 640 | 800 | 2050;

const ValidCantoSizes: Array<ValidCantoSize> = [
  100, 240, 320, 500, 640, 800, 2050,
];

export const isValidCantoSize = (size: any): size is ValidCantoSize => {
  return ValidCantoSizes.includes(size);
};

export const resizeCantoImage = (previewUrl: string, size: number) => {
  if (isValidCantoSize(size)) {
    const urlWithoutConstraint = previewUrl.slice(0, -3);

    return urlWithoutConstraint.concat(size.toString());
  }

  return previewUrl;
};

const responsiveCantoSrc = (
  previewUrl: string,
  originalUrl: string,
  width: number
) => {
  const eligibleSizes: Array<number> = ValidCantoSizes.filter(
    (size) => size < width
  );

  const srcSet = eligibleSizes.map((size) => {
    return {
      src: resizeCantoImage(previewUrl, size),
      size,
    };
  });

  srcSet.push({ src: originalUrl, size: width });

  return {
    srcSet,
  };
};

interface ParsedImage {
  url: string;
  width: number;
  height: number;
  altText?: string;
  caption?: string;
  credit?: string;
  srcSet?: Array<{ src: string; size: number }>;
}

export function damAssetToImage(site: string): undefined;
export function damAssetToImage(site: string, data: RawImage): ParsedImage;
export function damAssetToImage(site = "default", data?: RawImage) {
  if (typeof data === "undefined" || data === null) return undefined;

  const { metadata, url, width, height } = data;
  const { directUrlPreview, directUrlOriginal } = url;
  const { altText, ...assetMetadata } = getAssetMetadata(metadata, site) || {};

  const image: ParsedImage = {
    url: directUrlPreview,
    ...responsiveCantoSrc(
      directUrlPreview,
      directUrlOriginal,
      parseFloat(width)
    ),
    width: parseFloat(width),
    height: parseFloat(height),
    altText,
    ...assetMetadata,
  };

  return image;
}

export const damAssetToAlternateSource = (site = "default", data: RawImage) => {
  if (!data) return undefined;

  const { width, height, url: src, srcSet } = damAssetToImage(site, data);

  return {
    src,
    mediaCondition:
      width > height ? "(orientation: landscape)" : "(orientation: portrait)",
    width,
    height,
    srcSet,
  };
};
