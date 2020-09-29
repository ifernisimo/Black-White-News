import axios from "axios";
import { API_KEY } from "../environment/environment";

const instance = axios.create({
  baseURL: "https://newsapi.org/v2/",
});

export const newsAPI = {
  getSearchNews(
    SEARCH_WORD,
    DATE_FROM = Date,
    DATE_TO = Date,
    SORT_BY = "relevancy"
  ) {
    return instance
      .get(
        `everything?q=${SEARCH_WORD}&from=${DATE_FROM}&to=${DATE_TO}&sortBy=${SORT_BY}&apiKey=${API_KEY}`
      )
      .then((response) => response);
  },

  getHeadlineNews(COUNTRY = "ua") {
    return instance
      .get(`top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`)
      .then((response) => response);
  },
};
