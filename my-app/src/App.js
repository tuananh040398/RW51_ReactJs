import logo from './logo.svg';
import './App.css';
import demoComponent from './demoCRUD';
import { Component } from 'react';
import ViewProps from "./ViewProps"

// function App() {
//   return (
//     <div className="App">
//         <div>
//           <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <demoComponent.input />
//           <demoComponent.table />
//           </header>

//         </div>
//     </div>
//   );
// }

class App extends Component {
  
  constructor () {
    super();
    this.state = {
      nameButton: "Add",
      data: [{ id: 1, name: "ádfaf"}],
      count: 0,
      textInput: "",
      textInput2: "",
    };
  }

  incre = (data) => { 
    this.setState ((preState) => ({count: preState.count + data}));
  };

  decre = (data) => { 
    this.setState ((preState) => ({count: preState.count - data}));
  };
  
  handleChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState ({
      [name]: value,
    });
  };

  getInfo = () => {
    if (!this.state.textInput) {
      return "";
    };
    const newObj = {
      name: this.state.textInput,
      age: this.state.textInput2,
    };
    return (
      <ul>
        <li>{newObj.name}</li>
        <li>{newObj.age}</li>
      </ul>
    );
  };

  render() {
    const { nameButton, count, textInput} = this.state;
    return (
      <div className='App'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome</p>
        </header>
        <demoComponent.input />
        <demoComponent.table />
        
        <input onChange={this.handleChange} name="textInput"/> Name
        <input onChange={this.handleChange} name="textInput2"/>Age
        <button onClick={this.getInfo}>Click</button>
        {/* <ViewProps data={count} incre={this.incre} decre={this.decre} />
        <h1>Result: {count}</h1>
        <h1>Result: {textInput}</h1> */}
        {this.getInfo()}
      </div>
    );
  }
}
export default App;

