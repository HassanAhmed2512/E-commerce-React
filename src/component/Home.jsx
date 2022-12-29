import React, { Component } from 'react';
import ImageSlider from "./ImageSlider";
import MultiActionAreaCard from "./MultiActionAreaCard";
import './Home.css';



const slides = [
  "https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.jpg",
  "https://images.unsplash.com/photo-1612545667889-b061512d0dfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  "https://cdn.motor1.com/images/mgl/KjMYQ/s3/bugatti-divo-exterior.webp",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  "https://images.unsplash.com/photo-1578656415093-e7e19e5e132b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1566024164372-0281f1133aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1600712242805-5f78671b24da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
];

const containerStyles = {
  width: "100%",
  height: "calc(100vh - 90px)",
  margin: "20px 20px 50px 5px",
};
class Home extends Component {
  state = {
    user: {
      name: this.props.user_name,
      email: this.props.user_email,
      token: this.props.user_token
    },
    products: [
      {
        id: 1,
        title: "Bugatti Cheron",
        price: 30000,
        desc: "The Bugatti Chiron is the world's first super sports car to bring 1,500 HP onto the road with a torque of 1.600 Nm at 2,000 to 6,000 rpm",
        image: "https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.jpg"
      },
      {
        id: 2,
        title: "Chevrolet Corvette",
        price: 30000,
        desc: "The Chevrolet Corvette is a two-door, two-passenger luxury sports car manufactured and marketed by Chevrolet since 1953.",
        image: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
      },
      {
        id: 3,
        title: "Bugatti Veyron",
        price: 30000,
        desc: "The Bugatti Veyron EB 16.4 is a mid-engine sports car, designed and developed in Germany by the Volkswagen Group and Bugatti and manufactured in Molsheim",
        image: "https://cdn.motor1.com/images/mgl/KjMYQ/s3/bugatti-divo-exterior.webp"
      }
      ,
      {
        id: 4,
        title: "Ford Mustang",
        price: 30000,
        desc: "The Ford Mustang is a series of American automobiles manufactured by Ford",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
      },
      ,
      {
        id: 5,
        title: "Ford Ranger",
        price: 30000,
        desc: "The 2023 Ford Ranger is a midsize pickup truck offered as either an extended cab (SuperCab) with a 6-foot bed or a crew cab (SuperCrew) with a 5-foot bed",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      },  ,
      {
        id: 6,
        title: "Lamborghini Aventador ",
        price: 30000,
        desc: "The Aventador advances every concept of performance, immediately establishing itself as the benchmark for the super sports car secto",
        image: "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
      },
      {
        id: 7,
        title: "Lamborghini Huracan",
        price: 30000,
        desc: "Sculptured and sensual, the Huracán's design is based on the spiky hexagonal forms of the carbon atom",
        image: "https://images.unsplash.com/photo-1578656415093-e7e19e5e132b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 8,
        title: "Ferrari Laferrari",
        price: 30000,
        desc: "The LaFerrari is the first car in Ferrari history to be powered by the HY-KERS system. The ICE represents the pinnacle of engine development and research",
        image: "https://images.unsplash.com/photo-1566024164372-0281f1133aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 9,
        title: "BMW i340",
        price: 30000,
        desc: "The BMW Group sets trends in production technology and sustainability as an innovation leader with an intelligent material mix",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      },
      {
        id: 10,
        title: "Bugatti Divo",
        price: 30000,
        desc: "The Bugatti Divo is a mid-engine track-focused sports car developed and manufactured by Bugatti Automobiles S.A.S. The car is named after French racing",
        image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      },

    ]
  }


  render() {
    console.log(this.props)
    console.log(this.state)
    window.localStorage.token = this.state.user.user_token ?? ''
    return (
      <div>
        <div style={containerStyles}>
          {" "}
          <ImageSlider slides={slides} />{" "}
        </div>
        <div className='product-flex'>
          {this.state.products.map((product) => (
            <MultiActionAreaCard id={product.id} title={product.title} price={product.price} desc={product.desc} image={product.image} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;