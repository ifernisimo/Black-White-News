import { newsAPI } from "../../DAL/api";

const SET_NEWS = "GET_NEWS";
const FAKE_SEPARATE_NEWS = "FAKE_SEPARATE_NEWS";
const SET_MAIN_NEWS = "SET_MAIN_NEWS";
const SET_ACTIVE_POST = "SET_ACTIVE_POST";
const MOVE_TO_BLACK_NEWS = "MOVE_TO_BLACK_NEWS";
const SET_MAIN_NEW_PAGE = "SET_MAIN_NEW_PAGE";
const SET_IS_MOUNTED = "SET_IS_MOUNTED";
const MOVE_TO_WHITE_NEWS = "MOVE_TO_WHITE_NEWS";
const ADD_COMMENT = "ADD_COMMENT";
const UPDATE_COMMENT_TEXTAREA = "UPDATE_COMMENT_TEXTAREA";

let initialState = {
  preloadedNews: [],
  generatedBlackList: [],
  generatedWhiteList: [],
  activePost: null,
  activePostPosition: 0,
  mainNewsPagePosition: 1,
  mainNewsPost: [],
  searchWord: null,
  mainPostIsMounted: true,
  commentTextareaField: "",
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

    case SET_MAIN_NEWS: {
      return {
        ...state,
        mainNewsPost: [...action.news],
      };
    }

    case SET_ACTIVE_POST: {
      return {
        ...state,
        activePost: state.mainNewsPost[action.i],
        activePostPosition:
          action.i === state.mainNewsPost.length ? 0 : action.i + 1,
      };
    }

    case SET_MAIN_NEW_PAGE: {
      return {
        ...state,
        mainNewsPagePosition: action.page,
        mainPostIsMounted: false,
      };
    }

    case MOVE_TO_BLACK_NEWS: {
      return {
        ...state,
        generatedBlackList: [
          { ...state.activePost },
          ...state.generatedBlackList,
        ],
      };
    }

    case MOVE_TO_WHITE_NEWS: {
      return {
        ...state,
        generatedWhiteList: [
          { ...state.activePost },
          ...state.generatedWhiteList,
        ],
      };
    }

    case SET_IS_MOUNTED: {
      return {
        ...state,
        mainPostIsMounted: false,
      };
    }

    case UPDATE_COMMENT_TEXTAREA: {
      return {
        ...state,
        commentTextareaField: action.newText,
      };
    }

    case ADD_COMMENT: {
      return {
        ...state,
        activePost: {
          ...state.activePost,
          comments: state.activePost.comments
            ? [
                {
                  commentText: state.commentTextareaField,
                  commentDate: Date(),
                },
                ...state.activePost.comments,
              ]
            : [
                {
                  commentText: state.commentTextareaField,
                  commentDate: Date(),
                },
              ],
        },
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

export const setMainNews = (news) => ({
  type: SET_MAIN_NEWS,
  news,
});

export const setActivePost = (i) => ({
  type: SET_ACTIVE_POST,
  i,
});

export const setMainNewsPage = (page) => ({
  type: SET_MAIN_NEW_PAGE,
  page,
});

export const setIsMounted = () => ({
  type: SET_IS_MOUNTED,
});

export const moveToBlackList = () => ({
  type: MOVE_TO_BLACK_NEWS,
});

export const moveToWhiteList = () => ({
  type: MOVE_TO_WHITE_NEWS,
});

export const addCommentAC = () => ({
  type: ADD_COMMENT,
});

export const updateCommentField = (newText) => ({
  type: UPDATE_COMMENT_TEXTAREA,
  newText,
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

export const getTopHeadlinesFromApi = (COUNTRY, PAGE) => async (dispatch) => {
  const response = await newsAPI.getHeadlineNews(COUNTRY, PAGE);
  if (response.status === "ok" || response.status === 200) {
    dispatch(setMainNews(response.data.articles));
    dispatch(setActivePost(0));
  } else {
    console.log(response.status);
  }
};

export default newsReducer;
