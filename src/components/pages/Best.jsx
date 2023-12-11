import React from "react"
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import InfoHead from "../UI/infoHead/infoHead";

const Best = () => {
    return (
        <>
            <Header />
            <div className="content">
                <InfoHead content='Доска почёта' />
                <div className="book">
                <p>"Доска почета" студентов, которые консультируют или обучают и ссылки на их вацап или др спопоб связи.</p>

                </div>
            </div>
            <Footer />
        </>
    )
};

export default Best;
