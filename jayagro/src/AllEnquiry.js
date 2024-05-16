import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader.js";
export default function AllEnquiry() {
    let [loading, setLoading] = useState(false);
    const [Enquiry, setEnquiry] = useState([]);
    useEffect(() => {

        setLoading(true);
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/getallenquiry');
            setEnquiry(response.data);
            setLoading(false);
        }
        fetchData();
    }, [])
    return (
        <>
            {loading ? <Loader /> :
                <>
                    <table class="table mt-3">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">name</th>
                                <th scope="col">productname</th>
                                <th scope="col">Email</th>
                                <th scope="col">Purpose of Requirement</th>
                                <th scope="col">Requirement Details</th>
                                <th scope="col">datetime</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                Enquiry.map((e, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{e.name}</td>
                                            <td>{e.nameofproduct}</td>
                                            <td>{e.Email}</td>
                                            <td>{e.PurposeofRequirement}</td>
                                            <td>{e.RequirementDetails}</td>
                                            <td>{e.datetime}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </>
            }
        </>
    )
}
