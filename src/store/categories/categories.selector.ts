import { createSelector } from "reselect";
import { RootState } from "../store";

import { CategoriesState } from "./categories.reducer";
import { CategoryMap } from "./categories.types";

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
  (categories): CategoryMap => {
    return categories.reduce((acc, category) => {
      const { title, titleRU, items, imageUrl, id } = category;
      acc[title.toLowerCase()] = { items, titleRU, title, imageUrl, id };
      return acc;
    }, {} as CategoryMap);
  },
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading,
);
