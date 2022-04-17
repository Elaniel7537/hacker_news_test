import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "@services/axios";
import { getHackerNewsRoute } from "@services/routes";
import { RequestStatusEnum, ListTypeEnum } from "@utils/enum";

export const initialState = {
  listHackerNews: { loading: false, data: {} as {} },
  listHackerNewsFaves: null,
  pagination: {
    page: 0,
    hitsPerPage: 10,
  },
  pageSize: 0,
  loading: RequestStatusEnum.IDLE,
  listType: ListTypeEnum.ALL,
  selectFilter: undefined,
  error: null,
};

// filtrar hacker news
export const getHackerNewsFilter = createAsyncThunk(
  "hackerNews/getHackerNews",
  async (params: any) => {
    const response: any = await Axios.get(getHackerNewsRoute(params));
    return response?.data;
  }
);

const hackerNews = createSlice({
  name: "hackerNews",
  initialState,
  reducers: {
    setListaHackerNews: (state, action) => {
      state.listHackerNews.data = action.payload.hits;
      state.pageSize = action.payload.nbHits;
    },
    setListHackerNewsFaves: (state, action) => {
      state.listHackerNewsFaves = action.payload;
    },
    setListType: (state, action) => {
      state.listType = action.payload;
    },
    setFilterSelect: (state, action) => {
      state.selectFilter = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination.page = action.payload.page;
    },
  },
  extraReducers: {
    // filtrar hacker news
    [String(getHackerNewsFilter.pending)]: (state) => {
      state.listHackerNews.loading = true;
      if (state.loading === RequestStatusEnum.IDLE) {
        state.loading = RequestStatusEnum.PENDING;
      }
    },
    [String(getHackerNewsFilter.fulfilled)]: (state, action) => {
      if (state.loading === RequestStatusEnum.PENDING) {
        state.loading = RequestStatusEnum.IDLE;
        state.listHackerNews = { loading: false, data: action.payload.hits };
        state.pageSize = action.payload.nbHits;
      }
    },
    [String(getHackerNewsFilter.rejected)]: (state, action) => {
      state.listHackerNews.loading = false;
      if (state.loading === RequestStatusEnum.PENDING) {
        state.loading = RequestStatusEnum.IDLE;
        state.error = action.error;
      }
    },
  },
});

export const {
  setListaHackerNews,
  setListHackerNewsFaves,
  setListType,
  setFilterSelect,
  setPagination,
} = hackerNews.actions;

export default hackerNews.reducer;
