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

    default:
      return state;
  }
};

//Action Creators

export const setNewsAC = (articles) => ({
  type: SET_NEWS,
  articles,
});

//Thunk Creators

export const getSearchNewsFromApi = (SEARCH_WORD) => async (dispatch) => {
  const response = await newsAPI.getSearchNews(SEARCH_WORD);
  if (response.status === "ok" || response.status === 200) {
    dispatch(setNewsAC(response.data.articles));
  } else {
    console.log(response.status);
  }
};

export default newsReducer;
