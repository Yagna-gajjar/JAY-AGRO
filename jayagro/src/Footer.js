import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Footer() {

    const subscribeusers = {
        Email: ""
    }

    const reducer = (state, action) => {
        if (action.type === "merge") {
            return ({ ...state, [action.prop1]: action.prop2 });
        }
        return state;
    }

    const [state, dispatch] = useReducer(reducer, subscribeusers);
    const nav = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "merge", prop1: name, prop2: value });
    }

    const submitForm = async (e) => {
        e.preventDefault();

        await axios.post(process.env.REACT_APP_POSTSUB, state)
            .then((response) => {
                toast.success(response.data.msg, { position: "top-center" });
                nav("/");
            }).catch(error => console.log(error.response))
    }


    return (
        <>
            <div class="footer card text-center m-2">
                <div class="card-header bg-warning text-white p-2">
                    Subscribe
                </div>
                <div class="card-body text-warning">
                    <h5 class="card-title pt-4">Jay Agro Engineering</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <form className="p-4" action="" method="post" onSubmit={submitForm}>
                        <input className="subemail" type="email" name="Email" onChange={inputHandler} placeholder="Enter your Email" />

                        <button className="btn btn-warning text-truncate ms-2 rounded-3" type="submit">Subscribe</button>
                    </form>
                </div>
                <div class="card-footer text-muted bg-warning">
                </div>
            </div>
        </>
    );
}