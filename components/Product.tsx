import React from "react";

interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ id, name, image, price }) => {
  return (
    <div className="product">
      <img src={image} alt={name} className="w-[200px]"/>
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default Product;
