import React, {useState, useEffect} from "react"
import axios from "axios";

import Header from "../../blocks/header/Header";
import Footer from "../../blocks/footer/Footer";
import InfoHead from "../../UI/infoHead/infoHead";
import BestStudent from "../../blocks/bestStudent/BestStudent";

const Best = () => {

    // const STUDENT_URL = 'http://172.30.9.164/student/get'
    // const [errMsg, setErrMsg] = useState('')
    // const [students, setStudents] = useState([])

    const bestStudent = [
        {studentName: 'Леди Александровна Гага', occupation: 'Консультирует с 5 лет', description: 'Некая информация о человеке', link: 'https://you.com/', phone: '+79135556999', img: 'https://www.shkolazhizni.ru/img/content/i239/239217_or.jpg'},
        {studentName: 'Леди Александровна Гага', occupation: 'Консультирует с 5 лет', description: 'Некая информация о человеке', link: 'https://you.com/', phone: '+79135556999', img: 'https://www.shkolazhizni.ru/img/content/i239/239217_or.jpg'},
        {studentName: 'Леди Александровна Гага', occupation: 'Консультирует с 5 лет', description: 'Некая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человекеНекая информация о человеке', link: 'https://you.com/', phone: '+79135556999', img: 'https://www.shkolazhizni.ru/img/content/i239/239217_or.jpg'},
        {studentName: 'Леди Александровна Гага', occupation: 'Консультирует с 5 лет', description: 'Некая информация о человеке', link: 'https://you.com/', phone: '+79135556999', img: 'https://www.shkolazhizni.ru/img/content/i239/239217_or.jpg'},
    ]

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const students = await axios.get(STUDENT_URL);
    //             setStudents(students.data);
    //             console.log(students.data);
    //         } catch (error) {
    //             if(error.students?.status !== ''){
    //                 setErrMsg('Пока нет студентов');
    //             }
    //             console.error(error);
    //         }
    //     };
    //     fetchData();
    //     }, []);

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

                        {/* {students.length === 0 && 
                            <h3>{errMsg}</h3>
                        } */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Best;

    //доска почёта
    // const STUDENT_URL = 'http://172.30.9.164/video/add'
    // const [bsName, setbsName] = useState('')
    // const [bsOccupation, setbsOccupation] = useState('')
    // const [bsDescription, setbsDescription] = useState('')
    // const [bsLink, setbsLink] = useState('')
    // const [bsPhone, setbsPhone] = useState('')
    // const [bsImg, setbsImg] = useState('')

    // const addStudent = async () => {
    //     try {
    //         const response = await axios.post (
    //             STUDENT_URL,
    //             JSON.stringify({
    //                 'studentName' : bsName,
    //                 'occupation': bsOccupation,
    //                 'description': bsDescription,
    //                 'link': bsLink,
    //                 'phone': bsPhone,
    //                 'img': bsImg,
    //             }),
    //             {headers: { 'Content-Type': 'application/json' }}
    //         );
    //         setbsName('')
    //         setbsOccupation('')
    //         setbsDescription('')
    //         setbsLink('')
    //         setbsPhone('')
    //         setbsImg('')
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    
                {/* <div className={classes.editContent}>
                    <h2>Блок "Доска почёта"</h2>

                    <div className={classes.edit}>
                        <h3>Добавить нового студента</h3>
                            <input 
                                type="text" 
                                id="studentName" 
                                onChange={(e) => setbsName(e.target.value)}
                                value={bsName}
                                required
                                placeholder="Добавить инициалы студента" 
                            />
                            <input 
                                type="text" 
                                id="studentOccupation" 
                                onChange={(e) => setbsOccupation(e.target.value)}
                                value={bsOccupation}
                                required
                                placeholder="Добавить краткое описание" 
                            />
                            <textarea
                                type="text" 
                                id="studentDescription" 
                                onChange={(e) => setbsDescription(e.target.value)}
                                value={bsDescription}
                                required
                                placeholder="Добавить развернутое описание" 
                            />
                            <input 
                                type="text" 
                                id="studentLink" 
                                onChange={(e) => setbsLink(e.target.value)}
                                value={bsLink}
                                required
                                placeholder="Добавить ссылку на соц.сеть" 
                            />
                            <input 
                                type="text" 
                                id="studentPhone" 
                                onChange={(e) => setbsPhone(e.target.value)}
                                value={bsPhone}
                                required
                                placeholder="Добавить телефон студента" 
                            />
                            <input 
                                type="text" 
                                id="studentImg" 
                                onChange={(e) => setbsImg(e.target.value)}
                                value={bsImg}
                                required
                                placeholder="Добавить ссылку на фото" 
                            />
                            <Button onClick={addStudent} className='customBtn' >Отправить данные студента в базу данных</Button> 

                    </div>
                </div> */}

