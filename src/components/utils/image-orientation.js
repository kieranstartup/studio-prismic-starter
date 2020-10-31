export const ImageOrientation = (image) => {
  const isImageLandscape = image.dimensions.width > image.dimensions.height;

  if (isImageLandscape === true) {
    return "landscape";
  } else {
    return "portrait";
  }
};
