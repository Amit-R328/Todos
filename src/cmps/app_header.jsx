import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { UserMsg } from "./user-msg";

// import logo from '../assets/img/logo.jpg'



const AppHeader = () => {



    return (
        <section className="header-container">
            <div className="header-left-side"></div>
            <div className="header-main"></div>
            <div className="header-right-side"></div>
            {/* <UserMsg /> */}
        </section>
    )
}

export default AppHeader;

