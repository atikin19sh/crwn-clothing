import { createSelector } from "reselect";
import { RootState } from "../store";

import { CategoriesState } from "./categories.reducer";
import { CategoryData } from "./categories.types";

const selectCategoryReducer = (state: RootState): CategoriesState => {
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories;
  },
);

export const selectCategoriesData = createSelector(
  [selectCategories],
  (categories): CategoryData => {
    return categories.reduce((acc, category) => {
      const { title, titleRU, items } = category;
      acc[title.toLowerCase()] = { items, titleRU };
      return acc;
    }, {} as CategoryData);
  },
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading,
);
