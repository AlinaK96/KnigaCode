import React, {useState} from "react"
import axios from "axios";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import InfoHead from "../UI/infoHead/infoHead";

import Button from "../UI/button/Button";

const Edit = () => {

    const isAdmin = true

    //support

    const [supportQuestion, setSupportQuestion] = useState('')
    const [supportAnswer, setSupportAnswer] = useState('')
    const handleSubmit = async () => {
        axios.get(`http://172.30.9.164/support/add?question=${supportQuestion}&answer=${supportAnswer}`)
        setSupportAnswer('');
        setSupportQuestion('');
    }

    return (
        <>
            <Header />
            {isAdmin &&
            <div className="content">
            
                <InfoHead content='Редактировать страницы'/>
                <div className="editSupport">
                    <h3>Блок "Поддержка"</h3>
                        <input 
                            type="text" 
                            id="supportQuestion" 
                            onChange={(e) => setSupportQuestion(e.target.value)}
                            value={supportQuestion}
                            required
                            placeholder="Добавить новый вопрос" 
                        />
                        <textarea 
                            id="supportAnswer" 
                            cols="20" rows="5" 
                            placeholder="Добавить ответ"
                            onChange={(e) => setSupportAnswer(e.target.value)}
                            value={supportAnswer}
                            required
                        />

                        <Button onClick={handleSubmit} className='customBtn' >Отправить в базу данных</Button> 
                </div>
            </div>}
            <Footer />
        </>
    )
};

export default Edit;
