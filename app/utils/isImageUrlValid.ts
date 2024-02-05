const REGEPX = /^https:\/\/.+\.(jpg|jpeg|png|webp)$/;

export const isImageUrlValid = (url: string): boolean => {
  return REGEPX.test(url);
};
