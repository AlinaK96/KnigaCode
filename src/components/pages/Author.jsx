import React from "react"
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import InfoHead from "../UI/infoHead/infoHead";

import Slada from './img/author2.png'
import krug from './img/krug_alfatrim_full.png'


const Author = () => {
    return (
        <>
            <Header />
            <div className="content">
                <InfoHead content='О системе ТАЙНЫ ЛИЧНОГО КОДА и об авторе' />
                <div className="book">
                    <div className="leftPage">
                        <h2 className="title">Трансформационная Терапевтическая система декодирования личности </h2> <h2 className="title"> "ТАЙНЫ ЛИЧНОГО КОДА" </h2>
                        <img src={krug} alt="krug" />
                        <p>С помощью этой системы уже более 10 000 моих клиентов и мои ученики получили самую мощную силу в мире – Знания. Информацию о себе и об окружающих людях. А кто владеет информацией, тот владеет миром! Управлять своей жизнью становится максимально легко, просто и приятно! Присоединяйтесь к нашим рядам!</p>
                    
                    </div>
                    <div className="rightPage">
                        <img src={Slada} alt="author" />
                        <p>Я, Слада Новицки, Гуру – нумеролог, автор системы декодирования личности «Тайны Личного Кода», с помощью которой можно найти ответы на самые важные вопросы о себе, увидеть свой путь и свои особенности, разобраться во всех сферах жизни, достичь баланса, выйти на новый уровень и быть счастливым! </p>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Author;
