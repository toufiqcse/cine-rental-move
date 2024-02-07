const getImgUrl = (name) => {
  return new URL(`../../public/assets/movie-covers/${name}`, import.meta.url)
    .href;
};

export default getImgUrl;
