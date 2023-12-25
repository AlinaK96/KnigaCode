import React, {useState, useEffect} from "react"
import axios from "axios";

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import InfoHead from "../UI/infoHead/infoHead";

const Almanac = () => {


    return (
        <>
            <Header />
            <div className="content">
                <InfoHead content='Альманах' />
                <div className="book">
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Almanac;
