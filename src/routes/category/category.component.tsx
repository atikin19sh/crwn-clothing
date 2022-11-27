import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  selectCategoriesIsLoading,
  selectCategoriesData,
} from "../../store/categories/categories.selector";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import { CategoryContainer, Title } from "./category.styles";

type CategoryRouteParams = {
  category: string;
}

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const categoriesData = useSelector(selectCategoriesData);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [productsData, setProductsData] = useState(categoriesData[category]);

  useEffect(() => {
    setProductsData(categoriesData[category]);
  }, [category, categoriesData]);

  return (
    <main>
      {isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Title>{productsData && productsData.titleRU.toUpperCase()}</Title>
          <CategoryContainer>
            {productsData &&
              productsData.items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </CategoryContainer>
        </Fragment>
      )}
    </main>
  );
};

export default Category;
