import React, {useState, useEffect} from "react"
import axios from "axios";

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import InfoHead from "../UI/infoHead/infoHead";
import BestStudent from "../blocks/bestStudent/BestStudent";

const Best = () => {

    const STUDENT_URL = 'http://172.30.9.164/student/get'
    const [errMsg, setErrMsg] = useState('')
    const [students, setStudents] = useState([])

    const bestStudent = [
        {studentName: 'Леди Александровна Гага', occupation: 'Консультирует с 5 лет', description: 'Некая информация о человеке', link: 'https://you.com/', phone: '+79135556999', img: 'https://www.shkolazhizni.ru/img/content/i239/239217_or.jpg'},
        {studentName: 'Леди Александровна Гага', occupation: 'Консультирует с 5 лет', description: 'Некая информация о человеке', link: 'https://you.com/', phone: '+79135556999', img: 'https://www.shkolazhizni.ru/img/content/i239/239217_or.jpg'},
        {studentName: 'Леди Александровна Гага', occupation: 'Консультирует с 5 лет', description: 'Некая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человеке', link: 'https://you.com/', phone: '+79135556999', img: 'https://www.shkolazhizni.ru/img/content/i239/239217_or.jpg'},
        {studentName: 'Леди Александровна Гага', occupation: 'Консультирует с 5 лет', description: 'Некая информация о человеке', link: 'https://you.com/', phone: '+79135556999', img: 'https://www.shkolazhizni.ru/img/content/i239/239217_or.jpg'},
    ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const students = await axios.get(STUDENT_URL);
                setStudents(students.data);
                console.log(students.data);
            } catch (error) {
                if(error.students?.status !== ''){
                    setErrMsg('Пока нет студентов');
                }
                console.error(error);
            }
        };
        fetchData();
        }, []);

    return (
        <>
            <Header />
            <div className="content">
                <InfoHead content='Доска почёта' />
                <div className="book">
                    <div className="colums">
                        {bestStudent.map((student, index) => 
                            <BestStudent student={student}  key={index} />
                        )}

                        {students.length === 0 && 
                            <h3>{errMsg}</h3>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Best;
