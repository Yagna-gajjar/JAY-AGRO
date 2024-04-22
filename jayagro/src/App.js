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
import EditContact from './EditContact.js';
import EditEnquiry from './EditEnquiry.js';
import LogIn from './LogIn.js';
import Signup from './Signup.js';
import PvtRoute from './PvtRoute.js';
import AllEnquiry from './AllEnquiry.js';
import AllContact from './AllContact.js';
import AddProductPart from './AddProductPart.js';
import AdminProductparts from './adminProductparts.js';
import EditProductPart from './EditProductPart.js';

function App() {

  const [dth, setDth] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/api/dthrig');
      setDth(response.data);
    }
    fetchData();
  }, [])

  const [productpart, setProductpart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/api/productparts');
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
          <Route path={'/editcontact/:id'} element={<EditContact />} />
          <Route path={'/editenquiry/:id'} element={<EditEnquiry />} />
        </Route>
        <Route element={<PvtRoute />}>
          <Route path={'/getallenquiry'} element={<AllEnquiry />} />
          <Route path={'/getallcontact'} element={<AllContact />} />
          <Route path={'/addproductpart'} element={<AddProductPart />} />
          <Route path={'/getallproductparts'} element={<AdminProductparts />} />
          <Route path={'/editproductpart/:id'} element={<EditProductPart />} />
        </Route>
        <Route path={'/LogIn'} element={<LogIn />} />
        <Route path={'/SignUp'} element={<Signup />} />
      </Routes>
    </BrowserRouter >
  </>
  );
}

export default App;
