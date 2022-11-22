import { useSelector } from "react-redux";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <main className="categories-preview-container">
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const productsData = categoriesMap[title];
          return (
            <section key={title}>
              <CategoryPreview title={title} productsData={productsData} />
            </section>
          );
        })
      )}
    </main>
  );
};

export default CategoriesPreview;
