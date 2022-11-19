import ProductCard from "../product-card/product-card.component";

import { CategoryPreviewContainer, Title, Preview } from "./category-preview.styles";

const CategoryPreview = ({ title, productsData }) => {
  const { items, titleRU } = productsData;
  return (
    <CategoryPreviewContainer>
      <Title to={`${title}`}>
        <h2>
          <span>{titleRU.toUpperCase()}</span>
        </h2>
      </Title>
      <Preview>
        {items
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
