"use client";

import Image from "next/image";
import Products from "@/components/ProductCarusel"
import React, { useState } from "react";
import Image1 from "@/public/images/Group (1).png"
import Img1 from "@/public/images/image 1.png"
import Img2 from "@/public/images/image 15.png"


interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  quantity: number;
  image: string;
}

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Barberton Daisy",
      sku: "1995751877966",
      price: 119,
      quantity: 2,
      image: "https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a7ROX5ASxjvsp-nl3WotmP0XISy33BePsVpkAoenIljaJUSH8PQPeYmQXqe7DB8bFnGyoEtJWGbRdSeRsKJ3gaIXN92sse16vUEdW9a~KL-KRy4XfW4aqG4RnIOpYYOVy1frLHsO8Xv~Q8eZuGT7cxTpclvYz3DEKg1K3a7EfSQaIAEKJSiXV-qiwJRSzEys4CH3A7XtLFuCDIFVlCfrpO4aTdU~HbTN5zNqqIlP5WSz8fh0MppPPmxPRt1C3ZSGnyJwkdbPGq9cCo0a6x-i373DLggmVFznGeUJtj9AMOj-tGvwoyO453o01e4lfkKZOx~U~3qQhCGcZ~UQ2ifyyg__",
    },
    {
      id: 2,
      name: "Blushing Bromeliad",
      sku: "1995751877965",
      price: 139,
      quantity: 6,
            image: "https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a7ROX5ASxjvsp-nl3WotmP0XISy33BePsVpkAoenIljaJUSH8PQPeYmQXqe7DB8bFnGyoEtJWGbRdSeRsKJ3gaIXN92sse16vUEdW9a~KL-KRy4XfW4aqG4RnIOpYYOVy1frLHsO8Xv~Q8eZuGT7cxTpclvYz3DEKg1K3a7EfSQaIAEKJSiXV-qiwJRSzEys4CH3A7XtLFuCDIFVlCfrpO4aTdU~HbTN5zNqqIlP5WSz8fh0MppPPmxPRt1C3ZSGnyJwkdbPGq9cCo0a6x-i373DLggmVFznGeUJtj9AMOj-tGvwoyO453o01e4lfkKZOx~U~3qQhCGcZ~UQ2ifyyg__",

    },
    {
      id: 3,
      name: "Aluminum Plant",
      sku: "1995751877786",
      price: 179,
      quantity: 9,
      image: "https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a7ROX5ASxjvsp-nl3WotmP0XISy33BePsVpkAoenIljaJUSH8PQPeYmQXqe7DB8bFnGyoEtJWGbRdSeRsKJ3gaIXN92sse16vUEdW9a~KL-KRy4XfW4aqG4RnIOpYYOVy1frLHsO8Xv~Q8eZuGT7cxTpclvYz3DEKg1K3a7EfSQaIAEKJSiXV-qiwJRSzEys4CH3A7XtLFuCDIFVlCfrpO4aTdU~HbTN5zNqqIlP5WSz8fh0MppPPmxPRt1C3ZSGnyJwkdbPGq9cCo0a6x-i373DLggmVFznGeUJtj9AMOj-tGvwoyO453o01e4lfkKZOx~U~3qQhCGcZ~UQ2ifyyg__",
    },
  ]);

  // Mahsulot miqdorini yangilash funksiyasi
  const updateQuantity = (id: number, amount: number): void => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(product.quantity + amount, 0) }
          : product
      )
    );
  };

  // Subtotalni hisoblash funksiyasi
  const calculateSubtotal = (): number => {
    return products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  // Konstantalar
  const shippingCost: number = 16;
  const couponDiscount: number = 0;

  return (
    <>
      <div style={{ display: "flex", gap: "20px", padding: "20px" }} className="container flex flex-cols items-center justify-center">
        {/* Mahsulotlar jadvali */}
        <div>
          <table border={1} cellSpacing={0} style={{ width: "100%" }}>
            <thead>
              <tr>
                <th className="text-2xl">Products</th>
                <th className="text-2xl">Price</th>
                <th className="text-2xl">Quantity</th>
                <th className="text-2xl">Total</th>
                <th className="text-2xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}  className="bg-[#FBFBFB] mb-4 h-[30px]">
                  <td className="text-xl">
                    <div className="flex items-center justify-center">
                      <img src={product.image} alt="" className="w-[50px]"/>
                      {product.name}
                    </div>
                    <br />
                    <small>SKU: {product.sku}</small>
                  </td>
                  <td>${product.price.toFixed(2)}</td>
                  <td style={{ textAlign: "center" }}>
                    <button onClick={() => updateQuantity(product.id, -1)}>
                      -
                    </button>
                    <span style={{ margin: "0 10px" }}>{product.quantity}</span>
                    <button onClick={() => updateQuantity(product.id, 1)}>
                      +
                    </button>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    ${(product.price * product.quantity).toFixed(2)}
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        setProducts((prev) =>
                          prev.filter((item) => item.id !== product.id)
                        )
                      }
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Savat ma'lumotlari */}
        <div>
          <h3 className="text-2xl">Cart Totals</h3>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Enter coupon code here..."
              style={{ padding: "5px", width: "60%" }}
            />
            <button style={{ padding: "5px", marginLeft: "5px" }}>Apply</button>
          </div>
          <div style={{ marginBottom: "10px" }} className="text-xl">
            Subtotal: ${calculateSubtotal().toFixed(2)}
          </div>
          <div style={{ marginBottom: "10px" }} className="text-xl">
            Coupon Discount: ${couponDiscount.toFixed(2)}
          </div>
          <div style={{ marginBottom: "10px" }} className="text-xl">
            Shipping: ${shippingCost.toFixed(2)}
          </div>
          <h4 className="text-green-500 text-xl">
            Total: $
            {(calculateSubtotal() + shippingCost - couponDiscount).toFixed(2)}
          </h4>
          <div className="cartitems-down">
            {" "}
            <div className="cartitems-total">
              {" "}
              <button
                onClick={toggleModal}
                style={{
                  padding: "10px",
                  marginTop: "20px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {" "}
                PROCEED TO CHECKOUT{" "}
              </button>{" "}
            </div>{" "}
            {isOpen && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1000,
                }}
              >
                {" "}
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "10px",
                    maxWidth: "500px",
                    width: "90%",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  {" "}
                  {/* Close Button */}{" "}
                  <button
                    onClick={toggleModal}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      background: "none",
                      border: "none",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    &times;{" "}
                  </button>{" "}
                  {/* Modal Content */}{" "}
                  <div>
                    {" "}
                    <Image
                      src={Image1}
                      alt="Thank You"
                      className="m-auto h-[80px] mb-[20px]"
                    />{" "}
                    <h2>Your order has been received</h2>{" "}
                    <p>
                      {" "}
                      Order Number: <strong>19586887</strong>{" "}
                    </p>{" "}
                    <p>
                      {" "}
                      Date: <strong>15 Sep, 2021</strong>{" "}
                    </p>{" "}
                    <p>
                      {" "}
                      Total: <strong>$2,699.00</strong>{" "}
                    </p>{" "}
                    <p>
                      {" "}
                      Payment Method: <strong>Cash on delivery</strong>{" "}
                    </p>{" "}
                    {/* Order Details */}{" "}
                    <table
                      style={{
                        width: "100%",
                        marginTop: "20px",
                        textAlign: "left",
                        borderCollapse: "collapse",
                      }}
                    >
                      {" "}
                      <thead>
                        {" "}
                        <tr>
                          {" "}
                          <th
                            style={{
                              padding: "8px",
                              borderBottom: "1px solid #ddd",
                            }}
                          >
                            {" "}
                            Img{" "}
                          </th>{" "}
                          <th
                            style={{
                              padding: "8px",
                              borderBottom: "1px solid #ddd",
                            }}
                          >
                            {" "}
                            Products{" "}
                          </th>{" "}
                          <th
                            style={{
                              padding: "8px",
                              borderBottom: "1px solid #ddd",
                            }}
                          >
                            {" "}
                            Qty{" "}
                          </th>{" "}
                          <th
                            style={{
                              padding: "8px",
                              borderBottom: "1px solid #ddd",
                            }}
                          >
                            {" "}
                            Subtotal{" "}
                          </th>{" "}
                        </tr>{" "}
                      </thead>{" "}
                      <tbody>
                        {" "}
                        <tr>
                          {" "}
                          <Image
                            src={Img1}
                            alt="Image"
                            className="w-[60px]"
                          />{" "}
                          <td style={{ padding: "8px" }}>Barberton Daisy</td>{" "}
                          <td style={{ padding: "8px" }}>(x 2)</td>{" "}
                          <td style={{ padding: "8px", color: "green" }}>
                            {" "}
                            $238.00{" "}
                          </td>{" "}
                        </tr>{" "}
                        <tr>
                          {" "}
                          <Image
                            src={Img2}
                            alt="Image"
                            className="w-[60px]"
                          />{" "}
                          <td style={{ padding: "8px" }}>Blushing Bromeliad</td>{" "}
                          <td style={{ padding: "8px" }}>(x 6)</td>{" "}
                          <td style={{ padding: "8px", color: "green" }}>
                            {" "}
                            $834.00{" "}
                          </td>{" "}
                        </tr>{" "}
                        <tr>
                          {" "}
                          <Image
                            src={Img1}
                            alt="Image"
                            className="w-[60px]"
                          />{" "}
                          <td style={{ padding: "8px" }}>Aluminum Plant</td>{" "}
                          <td style={{ padding: "8px" }}>(x 9)</td>{" "}
                          <td style={{ padding: "8px", color: "green" }}>
                            {" "}
                            $1,611.00{" "}
                          </td>{" "}
                        </tr>{" "}
                        <tr>
                          {" "}
                          <td style={{ padding: "8px" }} colSpan={2}>
                            {" "}
                            Shipping{" "}
                          </td>{" "}
                          <td style={{ padding: "8px" }}>$16.00</td>{" "}
                        </tr>{" "}
                        <tr>
                          {" "}
                          <td style={{ padding: "8px" }} colSpan={2}>
                            {" "}
                            <strong>Total</strong>{" "}
                          </td>{" "}
                          <td style={{ padding: "8px", color: "green" }}>
                            {" "}
                            <strong>$2,699.00</strong>{" "}
                          </td>{" "}
                        </tr>{" "}
                      </tbody>{" "}
                    </table>{" "}
                    <p style={{ marginTop: "20px", color: "#666" }}>
                      {" "}
                      Your order is currently being processed. You will receive an
                      order confirmation email shortly with the expected delivery
                      date.{" "}
                    </p>{" "}
                    <button
                      style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        backgroundColor: "#28a745",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      Track your order{" "}
                    </button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            )}{" "}
          </div>
        </div>
      </div>
      <div className="container">
        <Products/>
      </div>
    </>
  );
};

export default App;
