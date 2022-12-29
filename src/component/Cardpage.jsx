import React from 'react';
import './Cardpage.css';


class Cardpage extends React.Component {

  href = window.location.pathname.split('/')

  state = {
    product: {
      "_id": `${this.href[this.href.length - 1]}`,
      "title": "Ford Mustang",
      "images": [
        "https://images.unsplash.com/photo-1588899451796-9ee681bf3da6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1618782658650-2c6eb20e62ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      ],
      "description": "The Ford Mustang is a series of American automobiles manufactured by Ford",
      "content": "",
      "price": 100000,
      "count": 1
    },
    index: 0
  };

  myRef = React.createRef();

  handleTab = index => {
    this.setState({ index: index })
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render() {
    const { index } = this.state;
    return (
      <div className="app">
        <div className="details" key={this.state.product._id}>
          <div className="big-img">
            <img src={this.state.product.images[index]} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{this.state.product.title}</h2>
              <span>${this.state.product.price}</span>
            </div>


            <p>{this.state.product.description}</p>
            <p>{this.state.product.content}</p>



            <div className="thumb" ref={this.myRef}>
              {
                this.state.product.images.map((img, index) => (
                  <img src={img} alt="" key={index}
                    onClick={() => this.handleTab(index)}
                  />
                ))
              }
            </div>

            <button className="cart">Add to cart</button>

          </div>
        </div>


      </div>
    );
  };
}

export default Cardpage;