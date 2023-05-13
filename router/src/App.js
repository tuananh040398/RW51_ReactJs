import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import { Routes, Route } from "react-router-dom";
import Block1 from "./components/Block1";
import Block2 from "./components/Block2";
import Detail from "./Pages/Detail";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Block1 />}></Route>
          <Route path="block2" element={<Block2 />}></Route>
        </Route>
        <Route path="about" element={<About />}>
          <Route path={`product/:idProduct`} element={<Detail />}></Route>
        </Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
