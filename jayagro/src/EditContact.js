import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from "./Loader.js";
import axios from 'axios';
import toast from 'react-hot-toast';
import Error404 from './Error404.js';

export default function EditContact() {
    let [loading, setLoading] = useState(false);
    const { id } = useParams();
    const contactuser = {
        username: '',
        Email: '',
        number: '',
        subject: '',
        message: '',
        datetime: null
    }

    const [contactusers, setContactuser] = useState(contactuser);
    const nav = useNavigate();

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await axios.get('https://jay-agro.onrender.com/onecontactuser/' + id);
            setContactuser({
                username: response.data.username,
                Email: response.data.Email,
                number: response.data.number,
                subject: response.data.subject,
                message: response.data.message,
                datetime: response.data.datetime
            });
            setLoading(false);
        }
        fetchData();
    }, [id])

    const inputchangeHandler = (e) => {
        const { name, value } = e.target;
        setContactuser({ ...contactusers, [name]: value });
    }

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.put('https://jay-agro.onrender.com/editcontactuser/' + id, contactusers)
            .then((response) => {
                toast.success(response.data.msg, { position: "top-center", iconTheme: { primary: 'rgb(255,193,7)', secondary: 'white' } });
                nav("/");
            }).catch(error => console.log(error.response))
    }

    const date1 = new Date();
    const date2 = new Date(contactusers.datetime);
    const hoursDifference = Math.abs(date1 - date2) / 36e5;

    return (
        <>
            {loading ? <Loader /> : <>
                {(hoursDifference >= 24) ? <div><Error404 /></div> : <div class="p-3 shadow m-5 p-5 opacity-100">
                    <form method="post" role="form" class="php-email-form w-100" data-aos="fade-up" onSubmit={submitForm}>
                        <div class="row">
                            <div class="col-md-6 form-group mt-2 mt-md-3 mt-lg-4">
                                <input type="text" name="username" value={contactusers.username} onChange={inputchangeHandler} class="form-control focus-ring focus-ring-warning" id="name" placeholder="Your Name" required />
                            </div>
                            <div class="col-md-6 form-group mt-2 mt-md-3 mt-lg-4">
                                <input type="email" class="form-control" name="Email" value={contactusers.Email} onChange={inputchangeHandler} id="email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div class="form-group mt-2 mt-md-3 mt-lg-4">
                            <input type="tel" class="form-control" name="number" value={contactusers.number} onChange={inputchangeHandler} id="phone" placeholder="Your phone-number" required />
                        </div>
                        <div class="form-group mt-2 mt-md-3 mt-lg-4">
                            <input type="text" class="form-control" name="subject" value={contactusers.subject} onChange={inputchangeHandler} id="subject" placeholder="Subject" required />
                        </div>
                        <div class="form-group mt-2 mt-md-3 mt-lg-4">
                            <textarea class="form-control" name="message" value={contactusers.message} onChange={inputchangeHandler} rows="5" placeholder="Message" required></textarea>
                        </div>
                        <div class="text-center mt-2 mt-md-3 mt-lg-4"><button class="btn pe-3 ps-3 mt-4 bg-warning" type="submit">Edit Message</button></div>
                    </form>
                </div>}
            </>
            }
        </>
    );
}
