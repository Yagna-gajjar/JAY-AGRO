import React, { useState, useEffect } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProductPart() {

  const productpart = {
    productname: "",
    productimage: "",
  }

  const { id } = useParams();

  const [productparts, setProductparts] = useState(productpart);
  const [file, setFile] = useState({})
  const nav = useNavigate();
  useEffect(() => {
    axios.get(`https://jay-agro.onrender.com/oneProductpart/${id}`)
      .then((response) => {
        setProductparts({
          productname: response.data.productname,
          productimage: response.data.productimage
        });
      }).catch(error => console.log(error.response))
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('productname', productparts.productname);
    formData.append('productimage', productparts.productimage);
    await axios.patch(`https://jay-agro.onrender.com/editProductpart/${id}`, formData)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-center", iconTheme: { primary: 'rgb(255,193,7)', secondary: 'white' } });
        nav("/getallproductparts");
      }).catch(error => console.log(error.response))
  }
  return (
    <div className='shadow-lg  m-5'>
      <form className='d-flex py-5 justify-content-center' onSubmit={submitForm} enctype="multipart/form-data">
        <div class="mb-3 w-50">
          <input onChange={(e) => {
            setProductparts({ ...productparts, 'productname': e.target.value })
          }} value={productparts.productname} name="productname" className='form-control mt-5' type='text' placeholder='product part name' />

          <input name="productimage" onChange={(e) => {
            setProductparts({ ...productparts, 'productimage': e.target.files[0].name })
            setFile(e.target.files[0]);
          }} class="form-control mt-3" type="file" id="formFile" />

          <div className='d-flex justify-content-center mt-3'>
            <button className="btn opacity-50 btn-warning text-white text-truncate" >Edit Productpart</button>
          </div>
        </div>
      </form>
    </div>
  );
}
