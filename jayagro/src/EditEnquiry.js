import React, { useEffect, useState, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from "./Loader.js";
import axios from 'axios';
import toast from 'react-hot-toast';
import Error404 from './Error404.js';

export default function EditEnquiry() {
    let [loading, setLoading] = useState(false);
    const { id } = useParams();
    const enquiryuser = {
        nameofproduct: '',
        name: '',
        Email: '',
        PurposeofRequirement: '',
        RequirementDetails: '',
        datetime: null
    }

    const [enquiryusers, setEnquiryusers] = useState(enquiryuser);
    const nav = useNavigate();

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/oneenquiryuser/' + id);
            setEnquiryusers({
                nameofproduct: response.data.nameofproduct,
                name: response.data.name,
                Email: response.data.Email,
                PurposeofRequirement: response.data.PurposeofRequirement,
                RequirementDetails: response.data.RequirementDetails,
                datetime: response.data.datetime
            });
            setLoading(false);
        }
        fetchData();
    }, [id])

    const inputchangeHandler = (e) => {
        const { name, value } = e.target;
        setEnquiryusers({ ...enquiryusers, [name]: value });
    }
    const displayRadioValue = () => {
        var ele = document.getElementsByName('flexRadioDefault');

        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
                enquiryusers.PurposeofRequirement = ele[i].value;
            };
        }
    }

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.put('http://localhost:5000/editenquiryuser/' + id, enquiryusers)
            .then((response) => {
                toast.success(response.data.msg, { position: "top-center", iconTheme: { primary: 'rgb(255,193,7)', secondary: 'white' } });
                nav("/");
            }).catch(error => console.log(error.response))
    }

    const date1 = new Date();
    const date2 = new Date(enquiryusers.datetime);
    const hoursDifference = Math.abs(date1 - date2) / 36e5;

    const [dth, setDth] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/dthrig');
            setDth(response.data);
        }
        fetchData();
    }, [])

    const [productpart, setProductpart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/productparts');
            setProductpart(response.data);
        }
        fetchData();
    }, [])

    let Productpart = productpart.map((e, index) => {
        return (
            <option id={"productpart" + index}>{e.productname}</option>
        );
    })
    let dthdetails = dth.map((e, index) => {
        return (
            <option id={"dth" + index}>dth rig {e.dthname}</option>
        );
    })

    return (
        <>
            {loading ? <Loader /> : <>
                {(hoursDifference >= 24) ? <div><Error404 /></div> : <div class="p-3 shadow m-5 p-5 opacity-100">
                    <form onSubmit={submitForm}>
                        <div class="mb-1 mb-md-2 mb-xl-3 ">
                            <input type="text" placeholder="Name" name="name" value={enquiryusers.name} onChange={inputchangeHandler} class="form-control emquirytext" />
                        </div>
                        <select class="form-select form-control emquirytext mb-1 mb-md-2 mb-xl-3 " aria-label="Default select example">
                            {Productpart}
                            <hr />
                            {dthdetails}
                        </select>
                        {/* <div class="mb-1 mb-md-2 mb-xl-3 ">
                            <input type="text" placeholder="Name" name="name" value={enquiryusers.nameofproduct} onChange={inputchangeHandler} class="form-control emquirytext" />
                        </div> */}
                        {/* <div class="mb-1 mb-2 mb-xl-3">
                            <input type="email" name="Email" placeholder="Email" value={enquiryusers.Email} onChange={inputchangeHandler} class="form-control  emquirytext" />
                        </div> */}
                        <div class="mb-1 mb-2 mb-xl-3">
                            <label for="exampleFormControlInput1" class="form-label emquirytext text-truncate">Purpose of Requirement</label>
                            <div class="form-check emquirytext">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="End Use" />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    End Use
                                </label>
                            </div>
                            <div class="form-check emquirytext">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Raw Material" />
                                <label class="form-check-label" for="flexRadioDefault3">
                                    Raw Material
                                </label>
                            </div>
                        </div>
                        <div class="mb-1 mb-2 mb-xl-3">
                            <textarea type="text" placeholder="Discription" value={enquiryusers.RequirementDetails} name="RequirementDetails" onChange={inputchangeHandler} class="form-control emquirytext" /></div>
                        < div>
                            <button className="submitEnquiry btn btn-warning text-truncate" type="submit" onClick={displayRadioValue}>Send Enquiry</button>
                        </div>
                    </form>
                </div>}
            </>
            }
        </>
    );
}
