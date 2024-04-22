import React from 'react';
import { Link } from "react-router-dom";
import './admin.css';

export default function AdminNav() {
    const changebg = (e) => {
        const a = Number(e.target.id);
        for (let i = 0; i < 4; i++) {
            if (i == a) {
                if (document.getElementById(i).classList.contains('lightyellowbackground')) {
                    document.getElementById(i).classList.remove('lightyellowbackground');
                }
                document.getElementById(i).classList.add('yellowbackground');
            }
            else {
                if (document.getElementById(i).classList.contains('yellowbackground')) {
                    document.getElementById(i).classList.remove('yellowbackground');
                }
                document.getElementById(i).classList.add('lightyellowbackground');
            }
        }
    }
    return (
        <div className="m-5 mt-2">
            <div className="d-flex justify-content-around">
                <Link id="0" to={'/getallenquiry'} onClick={changebg} style={{ 'textDecoration': 'none' }} className="p-2 fw-bold w-100 text-black yellowbackground d-flex justify-content-center align-self-center">Enquiry</Link>
                <Link id="1" to={'/getallcontact'} onClick={changebg} style={{ 'textDecoration': 'none' }} className="p-2 fw-bold w-100 text-black lightyellowbackground d-flex justify-content-center align-self-center">Contact</Link>
                <Link id="2" to={'/getallproductparts'} onClick={changebg} style={{ 'textDecoration': 'none' }} className="p-2 fw-bold w-100 text-black lightyellowbackground d-flex justify-content-center align-self-center">ProductParts</Link>
                <Link id="3" to={'/getallcontact'} onClick={changebg} style={{ 'textDecoration': 'none' }} className="p-2 fw-bold w-100 text-black lightyellowbackground d-flex justify-content-center align-self-center">Dth Rig</Link>
            </div>
        </div>
    );
}
