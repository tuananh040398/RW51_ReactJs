import React from "react";
import { Link, Outlet } from "react-router-dom";
import Block1 from "../components/Block1";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="d-flex">
        <div className="left-menu">
          <ul>
            <Link to={"/"}>Block 1</Link>
            <Link to={"block2"}>Block 2</Link>
          </ul>
        </div>
        <div className="content">
          <Outlet />
          {/* <Block1 /> */}
        </div>
      </div>
    </div>
  );
}
