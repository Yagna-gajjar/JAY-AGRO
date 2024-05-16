import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast'

export default function AdminProductparts() {

    let [loading, setLoading] = useState(false);
    const [productpart, setProductpart] = useState([]);
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/productparts');
            setProductpart(response.data);
            setLoading(false);
        }
        fetchData();
    }, [])

    const deleteProductpart = async (Productpartid) => {
        await axios.delete(`http://localhost:5000/deleteProductpat/${Productpartid}`)
            .then((response) => {
                setProductpart((preProductpart) => preProductpart.filter((user) => user._id !== Productpartid));
                toast.success(response.data.msg, { position: "top-center", iconTheme: { primary: 'rgb(255,193,7)', secondary: 'white' } });
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            <Link to={'.././addproductpart'} className='px-5 pb-5 text-warning'>Add Productpart</Link>
            <div className='px-5'>
                <table className="table">
                    <thead >
                        <tr>
                            <th scope="col">image</th>
                            <th scope="col" className='d-flex align-items-center'>name</th>
                            <th scope='col'></th>
                            <th scope='col'></th>
                            <th scope='col'></th>
                            <th scope='col'>delete</th>
                            <th scope='col'>edit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            productpart.map((e) => {
                                return (
                                    <tr>
                                        <th scope="row"><img className='img-fluid' style={{ height: "100px" }} src={require('./img/' + e.productimage)} /></th>
                                        <td colSpan="4">{e.productname}</td>
                                        <td onClick={() => {
                                            deleteProductpart(e._id)
                                        }} >
                                            <i class="bi bi-trash3-fill text-danger"></i></td>
                                        <td>
                                            <Link to={'/editproductpart/' + e._id}>
                                                <i class="bi bi-pencil-square text-primary"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div >
        </>
    );
}
