import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({});
  const [list] = useState([
    { id: 1, nameProduct: "Product1", price: "100" },
    { id: 2, nameProduct: "Product2", price: "200" },
    { id: 3, nameProduct: "Product3", price: "300" },
    { id: 4, nameProduct: "Product4", price: "400" },
  ]);

  const getData = () => {
    const productSelected = list.find(
      (product) => product.id === Number(idProduct)
    );
    setProduct(productSelected);
  };
  useEffect(() => {
    getData();
  }, [idProduct]);

  return (
    <div>
      <p>Id: {product.id}</p>
      <p>NameProduct: {product.nameProduct}</p>
      <p>Price: {product.price} </p>
    </div>
  );
}
