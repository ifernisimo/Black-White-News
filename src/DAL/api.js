import axios from "axios";
import { API_KEY } from "../environment/environment";

const instance = axios.create({
  baseURL: "https://newsapi.org/v2/",
});

export const newsAPI = {
  getSearchNews(SEARCH_WORD, DATE_FROM, DATE_TO) {
    return instance
      .get(
        `everything?q=${SEARCH_WORD}&from=${DATE_FROM}&to=${DATE_TO}&apiKey=${API_KEY}`
      )
      .then((response) => response);
  },

  getHeadlineNews(COUNTRY = "ua", PAGE) {
    return instance
      .get(`top-headlines?country=${COUNTRY}&page=${PAGE}&apiKey=${API_KEY}`)
      .then((response) => response);
  },
};
