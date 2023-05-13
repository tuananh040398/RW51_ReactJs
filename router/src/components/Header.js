import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <ul>
        <li className="menu">
          {/* <a href="/">Home</a> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <a href="about">About</a> */}
          <Link to="about">About</Link>
        </li>
        <li>
          {/* <a href="contact">Contact</a> */}
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
