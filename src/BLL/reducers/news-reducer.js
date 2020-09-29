import { newsAPI } from "../../DAL/api";

const SET_NEWS = "GET_NEWS";
const FAKE_SEPARATE_NEWS = "FAKE_SEPARATE_NEWS";

let initialState = {
  preloadedNews: [],
  generatedBlackList: [],
  generatedWhiteList: [],
  mainNewsPost: null,
  searchWord: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS: {
      return { ...state, preloadedNews: [...action.articles] };
    }

    case FAKE_SEPARATE_NEWS: {
      return {
        ...state,
        generatedBlackList: [
          ...state.preloadedNews.filter((item) => {
            const rand = Math.floor(Math.random() * Math.floor(2));
            return rand === 0 && item;
          }),
        ],
        generatedWhiteList: [
          ...state.preloadedNews.filter((item) => {
            const rand = Math.floor(Math.random() * Math.floor(2));
            return rand === 1 && item;
          }),
        ],
      };
    }

    default:
      return state;
  }
};

//Action Creators

export const setNewsAC = (articles) => ({
  type: SET_NEWS,
  articles,
});

export const separateNews = () => ({
  type: FAKE_SEPARATE_NEWS,
});

//Thunk Creators

export const getSearchNewsFromApi = (SEARCH_WORD) => async (dispatch) => {
  const response = await newsAPI.getSearchNews(SEARCH_WORD);
  if (response.status === "ok" || response.status === 200) {
    dispatch(setNewsAC(response.data.articles));
    dispatch(separateNews());
  } else {
    console.log(response.status);
  }
};

export default newsReducer;
