// "use client"

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Image from 'next/image';
// interface ProductType {
//   product_id: string;
//   product_name: string;
//   image_url: string[];
// }

// const SingleProductPage = () => {
//   const [products, setProducts] = useState<ProductType[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://3.125.43.204:7777/v1/products', {
//           headers: {
//             Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with valid token
//           },
//         });
//         setProducts(response.data); // Assuming API returns an array of products
//         setLoading(false);
//       } catch (err: any) {
//         console.error('Error Details:', err.response || err);
//         setError(err.response?.data?.message || 'An unknown error occurred');
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="grid grid-cols-3 gap-4 p-8">
//       {products.map((product) => (
//         <div key={product.product_id} className="flex flex-col items-center">
//           <Image
//             src={product.image_url && product.image_url.length > 0 ? product.image_url[0] : '/default-image.jpg'}
//             alt={product.product_name}
//             width={250}
//             height={250}
//             className="rounded shadow-md"
//           />
//           <h2 className="mt-4 text-center text-xl font-medium">{product.product_name}</h2>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SingleProductPage;

"use client";

import Image from "next/image";

import "@/app/shop/display.css"

import Img from "@/public/images/image 1.png";
import React, { useState } from "react";
import Products from "@/components/ProductCarusel";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "Basil Noble Lily", price: 12.0, image: "/images/basil.png" },
  {
    id: 2,
    name: "Blueberry Humbleleaf",
    price: 18.0,
    image: "/images/blueberry.png",
  },
  {
    id: 3,
    name: "Arrowfern Plant",
    price: 9.0,
    image: "/images/arrowfern.png",
  },
  { id: 4, name: "Bali's Heart Fern", price: 22.0, image: "/images/bali.png" },
  {
    id: 5,
    name: "Crimson Treevine",
    price: 25.0,
    image: "/images/crimson.png",
  },
];

const ProductPage: React.FC = () => {
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "20px",
      }}
      className="container"
    >
      <div
        style={{ display: "flex", gap: "40px" }}
        className="items-center justify-center"
      >
        <div className="flex">
          <div>
            <Image
              src={Img}
              alt="Product"
              style={{ width: "100px", borderRadius: "10px" }}
            />
            <Image
              src={Img}
              alt="Product"
              style={{ width: "100px", borderRadius: "10px" }}
            />
            <Image
              src={Img}
              alt="Product"
              style={{ width: "100px", borderRadius: "10px" }}
            />
            <Image
              src={Img}
              alt="Product"
              style={{ width: "100px", borderRadius: "10px" }}
            />
          </div>
          <div>
            <Image
              src={Img}
              alt="Product"
              style={{ width: "300px", borderRadius: "10px" }}
            />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h1 className="text-3xl pb-4">Barberton Daisy</h1>
          <p style={{ fontSize: "18px", color: "#28a745" }}>$119.00</p>
          <p>
            Short Description: This ceramic cylinder planter comes with a wooden
            stand to help elevate your plants off the ground.
          </p>
          <div style={{ margin: "40px 0" }}>
            <h3>Size:</h3>
            <div style={{ display: "flex", gap: "10px" }}>
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border:
                      selectedSize === size
                        ? "2px solid #28a745"
                        : "1px solid #ccc",
                    backgroundColor: selectedSize === size ? "#eaf9ed" : "#fff",
                    color: selectedSize === size ? "#28a745" : "#000",
                    fontWeight: selectedSize === size ? "bold" : "normal",
                    cursor: "pointer",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "20px",
            }}
            className="pt-4"
          >
            <button
              style={{
                width: "40px",
                height: "40px",
                border: "1px solid #28a745",
                borderRadius: "50%",
                backgroundColor: "#fff",
                color: "#28a745",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={decrement}
            >
              -
            </button>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              {count}
            </span>
            <button
              style={{
                width: "40px",
                height: "40px",
                border: "1px solid #28a745",
                borderRadius: "50%",
                backgroundColor: "#fff",
                color: "#28a745",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={increment}
            >
              +
            </button>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#28a745",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              BUY NOW
            </button>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                border: "1px solid #28a745",
                borderRadius: "5px",
                backgroundColor: "#fff",
                color: "#28a745",
                cursor: "pointer",
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="descriptionbox">
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">Description</div>
          <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium minima nesciunt expedita corrupti architecto aspernatur,
            corporis odit provident nisi! Dolores fugiat fuga voluptate
            quibusdam ut quidem rem quisquam officia voluptatibus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            illum quae enim atque, quod nemo magnam, temporibus voluptates
            inventore harum dolores unde deserunt animi qui minus sint vel
            voluptas explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            illum quisquam, veniam voluptate quod corrupti eos qui voluptatibus
            asperiores odio iusto excepturi, suscipit soluta totam dolor officia
            molestiae facilis quibusdam? Dignissimos alias doloremque quisquam
            vel quo exercitationem reiciendis dolor cumque porro vitae fugit qui
            aspernatur, fuga magni nisi quos id.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-4xl text-center p-8">Related Products</h2>
        <Products />
      </div>
    </div>
  );
};

export default ProductPage;
