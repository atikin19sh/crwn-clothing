import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Category } from "../../store/categories/categories.types";

import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles";

type DirectoryItemProps = {
  category: Category;
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, titleRU, title } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`shop/${title.toLowerCase()}`);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{titleRU}</h2>
        <p>Купить сейчас</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
