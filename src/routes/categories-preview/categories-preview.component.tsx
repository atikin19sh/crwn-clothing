import { useSelector } from "react-redux";

import {
  selectCategoriesIsLoading,
  selectCategoriesData,
} from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesData = useSelector(selectCategoriesData);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <main className="categories-preview-container">
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesData).map((title) => {
          const productsData = categoriesData[title];
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
