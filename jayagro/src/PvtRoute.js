import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';

export default function PvtRoute() {
    const nav = useNavigate();
    const email = localStorage.getItem('useremail')
    return email ? <><AdminNav /><Outlet /></> : nav('/LogIn')
}
