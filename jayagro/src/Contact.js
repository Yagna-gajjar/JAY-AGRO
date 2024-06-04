import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "./Loader.js";

export default function ContactUs() {
    let [loading, setLoading] = useState(false);
    const contactusers = {
        username: "",
        Email: "",
        number: "",
        subject: "",
        message: "",
    }

    const reducer = (state, action) => {
        if (action.type == "merge") {
            return ({ ...state, [action.prop1]: action.prop2 });
        }
        return state;
    }

    const [state, dispatch] = useReducer(reducer, contactusers);
    const nav = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "merge", prop1: name, prop2: value });
    }

    const submitForm = async (e) => {
        e.preventDefault();
        setLoading(true);

        await axios.post('https://jay-agro.onrender.com/contact', state)
            .then((response) => {
                toast.success(response.data.msg, { position: "top-center", iconTheme: { primary: 'rgb(255,193,7)', secondary: 'white' } });
                nav('/');
                setLoading(false);
            }).catch(error => console.log(error.response))
    }


    return (
        <>
            {loading ? <Loader /> :
                <div class="container icon-box p-3 p-md-5">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h3>Contact Us</h3>
                            <div class="w-25 border-bottom border-warning mx-auto"></div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-lg-4 col-sm-12 col-md-6 mb-4">
                            <div class="p-3">
                                <h4 class="rounded-circle bg-warning d-flex align-items-center justify-content-center"><i class="bi bi-telephone-fill text-dark"></i></h4>
                                <p class="mt-3"><a class="phones text-dark" href="tel:9978422542">+91 99784 22542</a><br /><a class="phones text-dark" href="tel:9825536118">+91 98255 36118</a></p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-12 col-md-6 mb-4">
                            <div class="p-3">
                                <h4 class="rounded-circle bg-warning d-flex align-items-center justify-content-center"><i class="bi bi-envelope-fill text-dark"></i></h4>
                                <p class="mt-3"><a class="phones text-dark" href="mailto:jayagroengineerimg@gmail.com">jayagroengineering@gmail.com</a></p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-12 col-md-6 mb-4">
                            <div class="p-3">
                                <h4 class="rounded-circle bg-warning d-flex align-items-center justify-content-center"><a href="https://goo.gl/maps/b912pSXUMKWcq1iC7"><i class="bi bi-geo-alt-fill text-dark"></i></a></h4>
                                <p class="mt-3">Metoda, GIDC, Rajkot</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-12 mb-4">
                            <div class="p-3 shadow">
                                <form method="post" role="form" class="php-email-form w-100" data-aos="fade-up" onSubmit={submitForm}>
                                    <div class="row">
                                        <div class="col-md-6 form-group mt-3">
                                            <input type="text" name="username" class="form-control" id="name" onChange={inputHandler} placeholder="Your Name" required />
                                        </div>
                                        <div class="col-md-6 form-group mt-3">
                                            <input type="email" class="form-control" name="Email" onChange={inputHandler} id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="tel" class="form-control" name="number" onChange={inputHandler} id="phone" placeholder="Your phone-number" required />
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="subject" onChange={inputHandler} id="subject" placeholder="Subject" required />
                                    </div>
                                    <div class="form-group mt-3">
                                        <textarea class="form-control" name="message" rows="5" onChange={inputHandler} placeholder="Message" required></textarea>
                                    </div>
                                    <div class="text-center mt-3"><button class="btn pe-3 ps-3 mt-4 bg-warning" type="submit">Send Message</button></div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.8992032846563!2d70.67706827523445!3d22.24390287972717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cc57bfdaaea1%3A0x857fbc14f9a672a3!2sJAY%20AGRO%20ENGINEERING%20DTH%20Drilling%20Machine%20Manufacturer!5e0!3m2!1sen!2sin!4v1693155907145!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}