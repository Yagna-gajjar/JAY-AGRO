import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast";

export default function Signup() {

    const nav = useNavigate();
    const styles = {
        borderRadius: '25px',
        textAlign: 'center',
    };

    let show_pass = false;
    const showpass = () => {
        if (!show_pass) {
            show_pass = true;
            document.getElementById('login_pass').type = 'text'
            let eye = document.getElementsByClassName('pass_eye')[0]
            eye.classList.remove("bi-eye-slash")
            eye.classList.add("bi-eye")

        }
        else {
            show_pass = false;
            document.getElementById('login_pass').type = 'password'
            let eye = document.getElementsByClassName('pass_eye')[0]
            eye.classList.remove("bi-eye")
            eye.classList.add("bi-eye-slash")
        }
    }


    const users = {
        Email: "",
        password: ""
    }

    const [user, setUser] = useState(users);
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }


    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/createadmin", user)
            .then((response) => {
                toast.success(response.data.msg, { position: "top-center" });
                localStorage.setItem('useremail', user.Email);
                nav("/");

            }).catch(error => console.log(error.response))
    }
    return (
        <div>
            <div style={styles} className='px-5 m-5 d-lg-flex justify-content-evenly bg-warning bg-opacity-25'>
                <img className='SignIn_img img-fluid' src={require('./img/DTH.png')} />
                <div className='SignIn_form d-flex justify-content-center align-items-center"'>
                    <form onSubmit={submitForm} className='mt-lg-5 mb-5'>
                        <div className='d-flex mt-2 mb-5 mt-lg-5'>
                            <input name='Email' onChange={inputHandler} className='singnIn_Inputs bg-warning bg-opacity-25 py-2 px-3 p-lg-3 rounded-pill outline-none' placeholder='Email' />
                        </div>
                        <div className='d-flex mt-2 mt-lg-5'>
                            <input id='login_pass' type='password' className='singnIn_Inputs bg-warning bg-opacity-25 py-2 px-3 p-lg-3 rounded-pill' placeholder='create password' />
                            <i class="bi bi-eye-slash pass_eye" onClick={showpass}></i>
                        </div>
                        <div className='d-flex mt-2 mt-lg-5'>
                            <input id='login_pass' type='password' name='password' onChange={inputHandler} className='singnIn_Inputs bg-warning bg-opacity-25 py-2 px-3 p-lg-3 rounded-pill' placeholder='repeat password' />
                            <i class="bi bi-eye-slash pass_eye" onClick={showpass}></i>
                        </div>
                        <div className='w-100 pt-4 d-flex justify-content-center'>
                            <button type='submit' className='btn bg-warning bg-opacity-75'>Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
