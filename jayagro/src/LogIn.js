import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Home.css';

export default function LogIn() {

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
    const nav = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/getforadmin", user)
            .then((response) => {
                console.log(response.data.check);
                if (response.data.check) {
                    toast.success(response.data.msg, { position: "top-center", iconTheme: { primary: 'rgb(255,193,7)', secondary: 'white' } });
                    localStorage.setItem('useremail', user.Email);
                    nav("/getallenquiry");
                }
                else {
                    toast.error("user does not match", { position: "top-center", iconTheme: { primary: "red", secondary: "white" } })
                }
            }).catch(error => console.log(error.response))
    }

    return (
        <div>
            <div style={styles} className='px-5 m-5 d-lg-flex justify-content-evenly bg-warning bg-opacity-25'>
                <img className='SignIn_img img-fluid' src={require('./img/DTH.png')} />
                <div className='SignIn_form d-flex justify-content-center align-items-center"'>
                    <form onSubmit={submitForm} className='mt-lg-5 mb-5'>
                        <div className='d-flex mt-2 mb-5 mt-lg-5'>
                            <input name='Email' type='email' onChange={inputHandler} className='singnIn_Inputs bg-warning bg-opacity-25 py-2 px-3 p-lg-3 rounded-pill outline-none' placeholder='Email' />
                        </div>
                        <div className='d-flex mt-2 mt-lg-5'>
                            <input name='password' id='login_pass' onChange={inputHandler} type='password' className='singnIn_Inputs bg-warning bg-opacity-25 py-2 px-3 p-lg-3 rounded-pill' placeholder='password' />
                            <i class="bi bi-eye-slash pass_eye" onClick={showpass}></i>
                        </div>
                        <div className='w-100 pt-4 d-flex justify-content-center'>
                            <button type='submit' className='btn bg-warning bg-opacity-75'>Login</button>
                        </div>
                        <p className='text-warning pt-3'>or SignIn with</p>
                        <div className='login_all_icons d-flex justify-content-center'>
                            <div>
                                <i class="bi bi-google login_icons"></i>
                            </div>
                            <div>
                                <i class="bi bi-facebook login_icons"></i>
                            </div>
                            <div>
                                <i class="bi bi-instagram login_icons"></i>
                            </div>
                        </div>
                        <div className='w-100 d-flex justify-content-center'>
                            <p className='mt-5 pe-2'>Don't have account ? </p><Link to={'/SignUp'} className='mt-5 login_text' style={{ textDecoration: "none" }}> Signup</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
