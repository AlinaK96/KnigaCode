import React from "react"
import axios from '../../api/axios';

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

const Math = () => {

    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')

    return (
        <>
            <Header content='Совместимость' />
            <div className="content">
            </div>
            <Footer />
        </>
    )
};

export default Math;
