import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function AddProductPart() {

  const productpart = {
    productname: "",
    productimage: "",
  }

  const [productparts, setProductparts] = useState(productpart);
  const [file, setFile] = useState({})
  const nav = useNavigate();
  // dotenv.config();
  // const addproductpart_api = process.env.REACT_APP_ADDPRODUCTPART;

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('productname', productparts.productname);
    formData.append('productimage', productparts.productimage);
    console.log(formData);
    await axios.post("https://jay-agro.onrender.com/addproductpart", formData)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-center", iconTheme: { primary: 'rgb(255,193,7)', secondary: 'white' } });
        nav('.././getallproductparts')
      }).catch(error => console.log(error.response))
  }

  return (
    <div className='shadow-lg  m-5'>
      <form className='d-flex py-5 justify-content-center' enctype="multipart/form-data">
        <div class="mb-3 w-50">
          <input onChange={(e) => {
            setProductparts({ ...productparts, ['productname']: e.target.value })
          }} name="productname" className='form-control mt-5' type='text' placeholder='product part name' />
          <input name="productimage" onChange={(e) => {
            setProductparts({ ...productparts, ['productimage']: e.target.files[0].name })
            setFile(e.target.files[0]);
          }} class="form-control mt-3" type="file" id="formFile" />

          <div className='d-flex justify-content-center mt-3'>
            <button onClick={submitForm} className="btn opacity-50 btn-warning text-white text-truncate" >Add Productpart</button>
          </div>
        </div>
      </form>

    </div>
  );
}
