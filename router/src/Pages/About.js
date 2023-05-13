import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  const [list] = useState([
    { id: 1, nameProduct: "Product1", price: "100" },
    { id: 2, nameProduct: "Product2", price: "200" },
    { id: 3, nameProduct: "Product3", price: "300" },
    { id: 4, nameProduct: "Product4", price: "400" },
  ]);

  return (
    <div>
      <h1>About</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <Link to={`product/${item.id}`}>{item.nameProduct}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
