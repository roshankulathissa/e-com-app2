import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "category1",
    title: "category01",
  },
  {
    id: "category2",
    title: "category02",
  },
  {
    id: "category3",
    title: "category03",
  },
  {
    id: "category4",
    title: "category04",
  },
  {
    id: "category4",
    title: "category05",
  },
];

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {},
});

export const categorySelector = createSelector(
  [(store) => store.category],
  (category) => category
);

export default categorySlice.reducer;
