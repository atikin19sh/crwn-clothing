import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "hats",
    titleRU: "головные уборы",
    imageUrl: "https://i.ibb.co/cvfq5Q1/hats.webp",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    titleRU: "верхняя одежда",
    imageUrl: "https://i.ibb.co/HVh5BMr/jackets.webp",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    titleRU: "обувь",
    imageUrl: "https://i.ibb.co/1ZJ5wst/sneakers.webp",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    titleRU: "для женщин",
    imageUrl: "https://i.ibb.co/1vLf9yg/womens.webp",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    titleRU: "для мужщин",
    imageUrl: "https://i.ibb.co/hcdZJGj/men.webp",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
