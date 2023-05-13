import logo from "./logo.svg";
import "./App.css";
import Text from "./demo";
import Demo2 from "./Demo2";
import demoComponent from "./demoCrudComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text />
        <Demo2 />
      </header>
      <demoComponent.inputComponent />
      <demoComponent.tableComponent />
    </div>
  );
}

export default App;
