import './App.css';
import './Home.css'
import Home from "./Home.js"
import About from "./About.js"
import Layout from './Layout.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './Contact';
import DTHrig from './DTHrig';
import DTHRigDetails from './DTHRigDetails';
import Enquiry from './Enquiry';
import ProductPart from './ProductPart';
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [dth, setDth] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(process.env.REACT_APP_GETDTHRIG);
      setDth(response.data);
    }
    fetchData();
  }, [])

  const [productpart, setProductpart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(process.env.REACT_APP_GETPRODUCTPART);
      setProductpart(response.data);
    }
    fetchData();
  }, [])

  let Dth = dth.map((e) => {
    return (
      <Route path={"/Enquiry" + e.dthname} element={<Enquiry name={e.dthname + " DTH Rig"} />} />
    );
  })

  let Productpart = productpart.map((e) => {
    return (
      <Route path={"/Enquiry" + e.productname} element={<Enquiry name={e.productname} />} />
    );
  })
  let dthdetails = dth.map((e) => {
    return (
      <Route path={"/dthdetails/" + e.dthname + "_dth_rig"} element={<DTHRigDetails id={e._id} />} />
    );
  })
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/DTHrig" element={<DTHrig />} />
          {Dth}{Productpart}
          <Route path='/ProductPart' element={<ProductPart />} />
          <Route path={"/dthdetails/:id"} element={<DTHRigDetails />} />
        </Route>
      </Routes>
    </BrowserRouter >
  </>
  );
}

export default App;
