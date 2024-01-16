import axios from "axios";

const ImageService = {
  get: {
    imgurImages: (searchValue: string, page: number) => {
      const apiUrl = `https://api.imgur.com/3/gallery/search?q=${searchValue}&page=${page}`;
      const clientId = "29c6819970993e8";
      return axios
        .get(apiUrl, {
          headers: {
            Authorization: `Client-ID ${clientId}`,
          },
        })
        .then((response) => response.data.data);
    },
    pexelImages: (searchValue: string, page: number) => {
      const pexelsId =
        "mMooiKjO1H96iTAY1UJnSNC4q3UgPT7woxrGBa4iEXtHpjZEefrQTfoW";
      return axios
        .get(
          `https://api.pexels.com/v1/search?query=${searchValue}&page=${page}`,
          {
            headers: {
              Authorization: `${pexelsId}`,
            },
          }
        )
        .then((response) => response.data);
    },
  },
};

export default ImageService;
