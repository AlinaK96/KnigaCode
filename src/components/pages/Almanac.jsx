import React, {useState, useEffect} from "react"
import axios from "axios";

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

const Almanac = () => {


    return (
        <>
            <Header content='Альманах'/>
            <div className="content">
                <div className="book">
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Almanac;
