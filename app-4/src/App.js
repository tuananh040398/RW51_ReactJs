import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import NewComponent from "./NewComponent";
import Count from "./Count";

function App() {
  const [color, setColor] = useState("red");
  const [count, setCount] = useState(100);
  const [state, setState] = useState({
    status: true,
    number: 1000,
  });
  const [nameProduct, setNameProduct] = useState();

  const tang = (data) => {
    setCount((preCount) => preCount + data);
  };

  const giam = (data) => {
    setCount((preCount) => preCount - data);
  };

  const [dataInput, setDataInput] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataInput);
  };

  useEffect(() => {
    async function getData() {
      try {
        let res = await fetch(
          "https://61015a754e50960017c29da2.mockapi.io/listProducts"
        );
        let data = await res.json();
        setCount(data);
      } catch (error) {
        throw new Error(error);
      }
    }

    getData();
  }, []);
  console.log(count);
  return (
    <div className="App">
      <Count tang={tang} giam={giam} />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setDataInput({ ...dataInput, name: e.target.value })}
          value={dataInput.name}
        />
        <br />
        <input
          type="text"
          onChange={(e) => setDataInput({ ...dataInput, age: e.target.value })}
          value={dataInput.age}
        />
        <br />
        <input type="submit" />
      </form>
      {/* <button onClick={() => setStatus((pre) => !pre)}>Unmound</button> */}
    </div>
  );
}

export default App;
