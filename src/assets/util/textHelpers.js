export const utilPostPreviewText = (string) => {
  return string.split(" ").slice(0, 10).join(" ");
};

export const utilGroupDescriptionPreview = (string) => {
  return string.split(" ").slice(0, 20).join(" ");
};
