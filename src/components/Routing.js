import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Customer from "./Customer";
import Home from "./Home";
// import AddProducts from "./AddProducts";
// import Admin from "./Admin";
// import Customer from "./Customer";
// import Home from "./Home";
import Login from "./Login";
import ViewAllBuses from "./ViewAllBuses";
import ViewSeats from "./ViewSeats";
// import UpdateModalForm from "./UpdateModalForm";
// import ViewAllProducts from "./ViewAllProducts";
// import ViewProduct from "./ViewProduct";

function Routing() {

   
  return (
    <Routes>
     <Route path="/viewAllBuses" element={<ViewAllBuses />} />
     {/* <Route path="/edit/:id" element={<UpdateModalForm />} /> */}
      <Route path="/viewSeats/:id" element={<ViewSeats />} />  
      <Route path="/" exact element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/addProduct" element={<AddProducts />} /> */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/customer" element={<Customer />} /> 
    </Routes>
  );
}

export default Routing;
