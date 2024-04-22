import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader.js";

export default function AllContact() {
    let [loading, setLoading] = useState(false);

    const [Contact, setContact] = useState([]);
    useEffect(() => {

        setLoading(true);
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/api/getallcontact');
            setContact(response.data);
            setLoading(false);
        }
        fetchData();
    }, [])
    return (<>
        {loading ? <Loader /> :

            <>
                <table table class="table mt-3" >
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">username</th>
                            <th scope="col">Email</th>
                            <th scope="col">number</th>
                            <th scope="col">subject</th>
                            <th scope="col">message</th>
                            <th scope="col">datetime</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            Contact.map((e, index) => {
                                return (
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{e.username}</td>
                                        <td>{e.Email}</td>
                                        <td>{e.number}</td>
                                        <td>{e.subject}</td>
                                        <td>{e.message}</td>
                                        <td>{e.datetime}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table >
            </>
        }
    </>
    )
}