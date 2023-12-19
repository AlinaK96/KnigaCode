import React, {useState, useEffect} from "react"
import axios from "axios";
import classes from './styles/Feedback.module.css'

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import InfoHead from "../UI/infoHead/infoHead";

import FeedbackItem from '../blocks/feedback/FeedbackItem'

import Button from '../UI/button/Button'
import PopUp from '../UI/popUp/PopUp'
import Textarea from '../UI/input/TextArea'

const Feedback = () => {

    const Feedback_URL = 'http://172.30.9.164/feedback/get'

    const token = localStorage.getItem('token')
    const [modalActive, setModalActive] = useState(false)
    const [feedback, setFeedback] = useState([{}])
    const [errMsg, setErrMsg] = useState('')
    const [feedbackUser, setFeedbackUser] = useState('Алина')
    const [feedbackText, setFeedbackText] = useState('')
    const isLoggedIn = true

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(Feedback_URL);
                setFeedback(response.data);
            } catch (error) {
                if(error.response?.status === 404){
                    setErrMsg('Ничего не найдено');
                }
                console.error(error);
            }
        };
        fetchData();
        }, []);

    const sendFeedback = async () => {
        axios.get(`http://172.30.9.164/feedback/add?username=${feedbackUser}&data=${feedbackText}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(response => {
            setFeedback(response.data)
        })
        setFeedbackText('');
    }

    return (
        <>
            <Header />
            <div className="content">
                <div className={classes.header__addBtn}>
                    <InfoHead content='Отзывы' />
                    {isLoggedIn && 
                        <div> 
                            <Button className='customBtn' onClick={() => setModalActive(true)} >
                                <span>Добавить отзыв</span>
                            </Button>
                        </div>
                    }
                </div>
                <div className="book">
                    {errMsg}
                    <div className="colums">
                        {feedback.map((item, index) => 
                            <FeedbackItem item={item} key={index} />
                        )}
                    </div>
                </div>
            </div>
            <Footer />


            <PopUp active={modalActive} setActive={setModalActive} popUpTitle='Добавить отзыв' >
                <div className='modal__data'>
                    <Textarea
                        id='feedback__id'
                        placeholder='Введите отзыв'
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                    />
                </div>

                <div className='modalBtn__content'>
                    <Button 
                        className='customBtn' 
                        onClick={ () => {
                            sendFeedback()
                            setModalActive(false)
                        }}>
                        <span>Добавить отзыв</span>
                    </Button>
                </div>
            </PopUp>
        </>
    )
};

export default Feedback;
