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


"use client"

import Image from "next/image";

import Img from "@/public/images/image 1.png";
import React, { useState } from 'react';
import Products from "@/service/Products";


type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

const products: Product[] = [
    { id: 1, name: 'Basil Noble Lily', price: 12.0, image: '/images/basil.png' },
    { id: 2, name: 'Blueberry Humbleleaf', price: 18.0, image: '/images/blueberry.png' },
    { id: 3, name: 'Arrowfern Plant', price: 9.0, image: '/images/arrowfern.png' },
    { id: 4, name: "Bali's Heart Fern", price: 22.0, image: '/images/bali.png' },
    { id: 5, name: 'Crimson Treevine', price: 25.0, image: '/images/crimson.png' },
];

const ProductPage: React.FC = () => {
    const [count, setCount] = useState(1);
    const [selectedSize, setSelectedSize] = useState('S');

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            margin: '20px',
        }} className="container">
            <div>
              <h2 className="text-4xl text-center p-8">Related Products</h2>
              <Products/>
            </div>
        </div>
    );
};

export default ProductPage;
