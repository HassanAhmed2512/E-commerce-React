import Cardpage from "./component/Cardpage";
import ShoppingCart from "./component/ShoppingCart";
import Home from "./component/Home";
import SecondAppBar from "./component/SecondAppBar";
import FirstAppBar from "./component/FirstAppBar";
import Login from "./component/Login";
import ForgetPassword from "./component/ForgetPassword";
import Register from "./component/Register";
import Dashboard from "./component/Dashboard";
import AllOrders from "./component/AllOrders";
import AllUsers from "./component/AllUsers";
import AllAdmin from "./component/AllAdmin";
import AllProducts from "./component/AllProducts";
import ProfileUser from "./component/ProfileUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import AddAdmin from "./component/AddAdmin";
import AddProduct from "./component/AddProduct";
import AddUser from "./component/AddUser";
import EditAdmin from "./component/EditAdmin";
import EditProduct from "./component/EditProduct";
import EditUSer from "./component/EditUser";
import Checkout from "./component/Checkout";
import Cupon from "./component/Cupon";
import Search from "./component/Search";
import Rest from "./component/Rest";

const App = () => {
  const [appbar, setappbar] = useState("0");
  return (
    <Router>
      <div>
      {appbar === "login" ? (
          <FirstAppBar />
        ) : (
          <SecondAppBar onFormSwitch={setappbar} />
        )}

        <Routes>
          <Route path="/Rest" element={<Rest />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Cupon" element={<Cupon />} />
          <Route path="/AddAdmin" element={<AddAdmin />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/EditAdmin/:id" element={<EditAdmin />} />
          <Route path="/EditProduct/:id" element={<EditProduct />} />
          <Route path="/EditUSer/:id" element={<EditUSer />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/ProfileUser" element={<ProfileUser />} />
          <Route path="/productpage/:id" element={<Cardpage />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/AllOrders" element={<AllOrders />} />
          <Route path="/AllUsers" element={<AllUsers />} />
          <Route path="/AllAdmin" element={<AllAdmin />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route exact path="/" element={<Home user_name='' user_email='' user_token='' />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
