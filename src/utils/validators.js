export const isValidUrl = (url) => {
  const regex = /^(http:\/\/|https:\/\/|www\.).*(\.mp4|\.mkv)$/;
  return regex.test(url);
};

export const isPositive = (value) => {
  return +value > 0;
};

export const isPositiveWithZero = (value) => {
  return +value >= 0;
};
