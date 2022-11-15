import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);

  return (
    <main className="categories-preview-container">
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <section key={title}>
            <CategoryPreview title={title} products={products} />
          </section>
        );
      })}
    </main>
  );
};

export default CategoriesPreview;
