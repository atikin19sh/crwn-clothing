import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => {
  console.log(state);
  return state.categories;
};

export const selectCategories = createSelector([selectCategoryReducer], (categoriesSlice) => {
  console.log(categoriesSlice);
  return categoriesSlice.categories;
});

export const selectCategoriesMap = createSelector([selectCategories], (categories) => {
  console.log(categories);
  return categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
});

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading,
);
