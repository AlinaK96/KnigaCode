import React from "react"
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import InfoHead from "../UI/infoHead/infoHead";


const Author = () => {
    return (
        <>
            <Header />
            <div className="content">
                <InfoHead content='Об авторе' />
                <div className="book">
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Author;
