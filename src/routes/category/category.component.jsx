import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
  const categoriesIsLoading = useSelector(selectCategoriesIsLoading);
  const { category } = useParams();
  const categories = useSelector(selectCategoriesMap);
  const {items, titleRU} = categories[category];
  const [products, setProducts] = useState(items);

  useEffect(() => {
    const { items } = categories[category];
    setProducts(items);
  }, [category, categories]);

  return (
    <main>
      {categoriesIsLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Title>{titleRU.toUpperCase()}</Title>
          <CategoryContainer>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </CategoryContainer>
        </Fragment>
      )}
    </main>
  );
};

export default Category;
