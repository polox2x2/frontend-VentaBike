const FetchImage = (imageName: string, formatType: string) => {
  const URL = `/assets/images/${imageName}.${formatType}`;
  return URL;
};

export default FetchImage;
