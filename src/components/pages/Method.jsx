import React from "react"
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import InfoHead from "../UI/infoHead/infoHead";

const Method = () => {
    return (
        <>
            <Header />
            <div className="content">
                <InfoHead content='О методе'/>
                <div className="book">
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Method;
