import React, { Component } from "react";

export default class CallApi extends Component {
  constructor() {
    super();
    this.state = {
      count: 10,
      list: [],
      nameProduct: "",
      img: "",
      price: "",
      link: "",
      id: "",
      title: "",
      author: "",
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {}

  getData = () => {
    fetch("http://localhost:3000/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          list: data,
        });
      });
  };

  deleteItem = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => this.getData());
  };

  handleChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { nameProduct, img, price, link, id, title, author } = this.state;
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify({
        title,
        author,
        // nameProduct,
        // img,
        // price,
        // link,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.getData();
        this.setState({
          nameProduct: "",
          link: "",
        });
      });
  };
  render() {
    const { list } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" onChange={this.handleChange} name="title" />
          <br></br>
          <label>Img</label>
          <input type="text" onChange={this.handleChange} name="author" />
          <br></br>
          <label>Price</label>
          <input type="text" onChange={this.handleChange} name="price" />
          <br></br>
          <label>Link</label>
          <input type="text" onChange={this.handleChange} name="link" />
          <br></br>
          <input type="submit"></input>
        </form>
        {list.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.title}</span>
              <button onClick={() => this.deleteItem(item.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}
