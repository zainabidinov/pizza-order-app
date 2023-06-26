import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "popularity",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      // "payload" stores what we pass or assign 
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      // "payload" stores what we pass or assign 
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
    }
  },
});

// "actions" is an object that holds methods under the "reducers" property
export const { setCategoryId, setSort, setCurrentPage, setFilters} = filterSlice.actions;

export default filterSlice.reducer;
