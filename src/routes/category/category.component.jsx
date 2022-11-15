import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategories } from "../../store/categories/categories.selector";

import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  console.log("render/rerendering");
  const categories = useSelector(selectCategories);
  console.log("selector fired");
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    console.log("effect setProducts fired");
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <main>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </main>
  );
};

export default Category;
