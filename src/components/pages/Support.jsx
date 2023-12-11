import React from "react"
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import InfoHead from "../UI/infoHead/infoHead";

const Support = () => {
    return (
        <>
        <Header />
        <div className="content">
            <InfoHead content='Мы подготовили для вас ответы на самые часто задаваемые вопросы' />
            <div className="book">
            </div>
        </div>
        <Footer />
    </>
    )
};

export default Support;
