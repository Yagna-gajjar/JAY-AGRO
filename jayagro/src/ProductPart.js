import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Enquiry from "./Enquiry";
import "./ProductPart.css"

export default function ProductPart() {

    const [showModel, setShowModel] = useState(false);
    const [productpart, setProductpart] = useState([]);
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
            const response = await axios.get(process.env.REACT_APP_GETPRODUCTPART);
            setProductpart(response.data);
        }
        fetchData();
    }, [])

    let c = productpart.map((e) => {
        return (
            <>
                < div id="productcard" className="card col-sm-12 col-md-4 col-lg-3 border border-grey border-2 m-sm-1 m-md-5 m-lg-4 m-xl-5" >
                    <div className="row">
                        <h3 className="card-title text-center text-warning opacity-50">{e.productname}</h3>
                        <img src={require('./img/' + e.productimage)} className="card-img-top img-fluid" />
                    </div>
                    <div className="row" id="bnt">
                        <div class="col-md-6 m-2" >
                            <Link className="btn btn-warning btn-block text-truncate" id={e.productname} onClick={passdthname} >Enquiry now </Link>
                        </div>
                    </div>

                </div >
            </>
        );
    })

    return (
        <>
            <h1 className="text-center text-warning p-4">Product Part</h1>
            <div className="bg-warning me-lg-5 ms-lg-5"><Link className="p-2" id="homelink" to="/">Home </Link>{">"} Product Part</div >

            <div className="container mt-5 mb-5">
                <div className="row">{c}</div>
            </div >
            {showModel && <Mymodal />};
        </>
    );
}