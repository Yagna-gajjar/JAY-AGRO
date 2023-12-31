import dthimg from "./img/DTH.png";
import { Link } from "react-router-dom";
import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./Enquiry.css"

export default function Enquiry(props) {

    const equiryusers = {
        dthname: props.name,
        name: "",
        Email: "",
        PurposeofRequirement: "",
        RequirementDetails: ""
    }
    const displayRadioValue = () => {
        var ele = document.getElementsByName('flexRadioDefault');

        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
                state.PurposeofRequirement = ele[i].value;
            };
        }
    }

    const reducer = (state, action) => {
        if (action.type == "merge") {
            return ({ ...state, [action.prop1]: action.prop2 });
        }
        return state;
    }

    const [state, dispatch] = useReducer(reducer, equiryusers);
    const nav = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "merge", prop1: name, prop2: value });
    }

    const submitForm = async (e) => {
        e.preventDefault();

        await axios.post(process.env.REACT_APP_POSTENQUIRY, state)
            .then((response) => {
                toast.success(response.data.msg, { position: "top-center" });
            }).catch(error => console.log(error.response))
        await axios.post(process.env.REACT_APP_POSTENQUIRYEMAIL, state)
            .then(() => {
                nav("/");
            }
            )
            .catch(error => console.log(error.response + "error for email" + state))
    }


    return (
        <>
            <div class="container rounded-5" id="enquirydth" style={{ backgroundColor: "white" }}>
                <div class="row">
                    <div class="col mt-1 m-md-2 m-xl-3 p-xl-3  text-truncate">
                        <div className="emquirytext bg-warning m-1 m-md-2 m-xl-3 p-1 p-md-2 p-xl-3 text-truncate">JAE {props.name}</div>

                        <div class="col m-xl-3"><img src={dthimg} className="img-fluid" /></div>
                    </div>
                    <div class="col m-xl-3 mt-1 m-md-2 p-xl-3">
                        <div className="emquirytext bg-warning m-1 m-md-2 m-xl-3 p-1 p-md-2 p-xl-3  text-truncate">Get Best Quote</div>
                        <div class="row pt-3 pb-3 p-md-3 p-xl-5">
                            <div class="col m-xl-3">
                                <form onSubmit={submitForm}>
                                    <div class="mb-1 mb-md-2 mb-xl-3 ">
                                        <input type="text" placeholder="Name" name="name" onChange={inputHandler} class="form-control emquirytext" />
                                    </div>
                                    <div class="mb-1 mb-2 mb-xl-3">
                                        <input type="email" name="Email" placeholder="Email" onChange={inputHandler} class="form-control  emquirytext" />
                                    </div>
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
                                        <textarea type="text" placeholder="Discription" name="RequirementDetails" onChange={inputHandler} class="form-control emquirytext" /></div>
                                    < div>
                                        <button className="submitEnquiry btn btn-warning text-truncate" type="submit" onClick={displayRadioValue}>Send Enquiry</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div >

        </>
    );
}