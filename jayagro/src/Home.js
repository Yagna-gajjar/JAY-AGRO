import "./Home.css"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Enquiry from "./Enquiry";

export default function Home() {
    let h = "Jay Agro Engineering is one of the well-known names in the DTH rig manufacturing industry. We are a well-established company also manufacturing DTH rig parts. We are committed in our efforts towards continuously trying to innovate and develop our machines to be of even more superior quality than what it was previously"
    let As = "At our factory premises, all our machines and parts undergo stringent and all-inclusive quality control checks before they are delivered. We are careful with every step in our production. Beginning from the sourcing of raw materials to the finishing touches that are to be applied, everything is done with utmost care. Every step is performed by highly trained professionals under Mr. Harsukhbhai G Gangajaliya."

    const [showModel, setShowModel] = useState(false);

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

    const [dth, setDth] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(process.env.REACT_APP_GETDTHRIG);
            setDth(response.data);
        }
        fetchData();
    }, [])

    let c = dth.map((e) => {
        return (
            <>
                <Link to={"/dthdetails/" + e._id} className="col-xl-4 col-sm-12" id="linkdecore">
                    <div className="card m-2" id="card">
                        <img src={require('./img/' + e.dthimage)} className="card-img-top" alt="..." />
                        <div className="card-title text-warning">{e.dthname} DTH Rig</div>
                        <div className="card-body">
                            <Link id={e.dthname} onClick={passdthname} className="btn btn-warning me-5">Send Enquiry</Link>
                            <Link to={"/dthdetails/" + e._id} class="btn btn-warning">View more</Link>
                        </div>
                    </div>
                </Link >
            </>
        );
    })
    return (
        <div id="home">
            <div id="herosection" className="container mt-5 mb-5 p-4 shadow">
                <div className="row">
                    <div className="col-lg col-sm-12 opacity-50 text-warning icon-box">
                        <h3>Welcom to</h3>
                        <h1>Jay Agro Engineering</h1><br />
                        <h2>
                            MFG. BOREWELL DRILLING RIG & REPAIRER</h2><br />
                        <h4>
                            <i className="bi bi-geo-alt-fill pe-2"></i> Metoda, GIDC, Rajkot
                            <br />
                            GST No.: 24AHJPG7548K1Z0
                        </h4><br />
                        <h5>Call Us</h5>
                        <p><a className="phones text-warning" href="tel:9978422542">+91 99784 22542</a><br />
                            <a className="phones text-warning" href="tel:9825536118">+91 98255 36118</a></p>

                    </div>
                    <div className="col-lg col-sm-12">
                        <img id="herodthimage" src={require('./img/DTH.png')} class="img-fluid" alt="Jay Agro Engineering" />
                    </div>
                </div>
            </div>

            <div id="aboutofhome" className="container">
                <div className="row">
                    <div className="col-xl-4 col-sm-12"><img src={require('./img/DTH.png')} className="img-fluid" /></div>
                    <div className="col-xl col-sm-12">
                        <h2 className="m-3 text-warning">Welcome to our Website</h2>
                        <div id="contentofhome" className="col m-3">{h}. {As}<br />
                            <Link to="/About">Read More..</Link>
                        </div>
                    </div>
                </div>
                <div className="row m-5">
                    <div className="col-md col-sm-12 icon-box" data-aos="fade-up">

                        <h4 className=" text-truncate"><i className="bi bi-person-fill pe-2 text-warning"></i><a>CEO</a></h4>
                        <p className=" text-truncate">Harsukhbhai Goradhanbhai Gangajaliya</p>
                    </div>
                    <div className="col-md col-sm-12 icon-box" data-aos="fade-up" data-aos-delay="100">

                        <h4 className=" text-truncate"><i className="bi bi-building pe-2 text-warning"></i><a>Year of Establishment</a></h4>
                        <p className=" text-truncate">2008</p>
                    </div>
                    <div className="col-md col-sm-12 icon-box" data-aos="fade-up" data-aos-delay="200">

                        <h4 className=" text-truncate"><i className="bi bi-truck pe-2 text-warning"></i><a>Nature of Business</a></h4>
                        <p className=" text-truncate">Manufacturer, Exporter & Supplier</p>
                    </div>
                    <div className="col-md col-sm-12 icon-box" data-aos="fade-up" data-aos-delay="300">

                        <h4 className=" text-truncate"><i className="bi bi-people pe-2 text-warning"></i><a>Number of Employes</a></h4>
                        <p className=" text-truncate">8</p>
                    </div>
                </div>
            </div>
            <div className="container shadow p-3 " id="homedth">
                <div className="row">
                    {c}
                </div>
            </div>

            {showModel && <Mymodal />};
        </div>
    );
}