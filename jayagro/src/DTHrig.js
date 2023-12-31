import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Enquiry from "./Enquiry";
import "./DTHrig.css"

export default function DTHrig() {

    const [showModel, setShowModel] = useState(false);

    const [dth, setDth] = useState([]);
    let [pasingdthname, setPasingdthname] = useState({});
    const passdthname = async (e) => {
        const { id } = e.target;
        await setPasingdthname({ type: "merge", prop1: id });
        setShowModel(true)
    }

    const Mymodal = () => {
        return (
            <div className="modal-wrapper">

                <div className="modal-container container">
                    <div className="modal-header">
                        <h5></h5>
                        <button className="btn btn-warning" onClick={() => {
                            setShowModel(false)
                        }}>X</button>
                    </div>
                    <Enquiry name={pasingdthname.prop1} />
                </div>
            </div>
        )
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(process.env.REACT_APP_GETDTHRIG);
            setDth(response.data);
        }
        fetchData();
    }, [])


    let FormatedDetails = dth.map((e) => {
        return (
            <Link to={"/dthdetails/" + e._id} class="m-sm-4 col-lg col-sm-12 border border-2 border-black" id="dthLink">
                <img src={require('./img/' + e.dthimage)} class="img-fluid" />
                <div class="card-body">
                    <h5 class="card-title text-warning"> {e.dthname} DTH Rig</h5>
                    <p class="card-text">
                        <table class="table">

                            <tbody>
                                <tr>
                                    <th id="th" scope="row">1</th>
                                    <td className="t">Hole Diameter</td>
                                    <td>{e.HD}</td>
                                </tr>
                                <tr>
                                    <th id="th" scope="row">2</th>
                                    <td className="t">Drilling Depth </td>
                                    <td>{e.DD}</td>
                                </tr>
                                <tr>
                                    <th id="th" scope="row">3</th>
                                    <td className="t">Truck</td>
                                    <td>{e.Truck}</td>
                                </tr>
                                <tr>
                                    <th id="th" scope="row">4</th>
                                    <td className="t">Application</td>
                                    <td>{e.Application}</td>
                                </tr>
                                <tr>
                                    <th id="th" scope="row">5</th>
                                    <td className="t">Formation</td>
                                    <td>{e.Formation}</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                    <div class="row">
                        <div class="col-md-6 mb-2">
                            <Link className="openModal btn btn-warning btn-block text-truncate" id={e.dthname} onClick={passdthname} >Enquiry Now</Link>
                            {/* <Link to={"/Enquiry" + e.dthname} class="btn btn-warning btn-block text-truncate">Enquiry Now</Link> */}

                        </div>
                        <div class="col-md-6 mb-2">
                            <Link to={"/dthdetails/" + e._id} class="btn btn-warning btn-block text-truncate">View more</Link>
                        </div>
                    </div>
                </div>
            </Link >
        );
    })
    return (
        <>
            <div><h1 className="text-center text-warning m-5">DTH Rig</h1></div>
            <div className="container">
                <div className="row">{FormatedDetails}</div>
            </div >
            {showModel && <Mymodal />};
        </>
    );
} 