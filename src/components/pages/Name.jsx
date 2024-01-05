import React, {useState, useEffect} from "react"
import { NavLink } from 'react-router-dom';
import axios from '../../api/axios';

import classes from './styles/match.module.css'

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import Input from "../UI/input/Input";
import Dropdown from "../UI/dropdown/Dropdown";
import Button from "../UI/button/Button";

const Name = () => {

    const MATCHNAME_URL = '/calculation/selection';

    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')
	const [errMsg, setErrMsg] = useState('');

    const isStudent = false
    const isRegistered = true

    const [list, setList] = useState([])

    const [mission, setMission] = useState('')
    const [familyname, setFamilyname] = useState('')
    const [data, setData] = useState('')
    const [userSearch, setUserSearch] = useState('')
    const [gender, setGender] = useState('')

    const searchOption = [
        { title: 'Выберите один вариант'},
        { title: 'Подобрать имя', value: 'name'},
        { title: 'Пободрать отчество', value: 'lastname' }
    ];

    const chooseSearch = (option) => {
        setUserSearch(option);
    };

    const genderDrop = [
        { title: 'Выберите один вариант'},
        { title: 'муж', value: 'male'},
        { title: 'жен', value: 'female' }
    ];

    const chooseGender = (option) => {
        setGender(option);
    };

    const searchName = async () => {
		try {
			const response = await axios.post(
				MATCHNAME_URL,
				JSON.stringify({ 
					'mission': mission,
					'gender': gender,
                    'familyname': familyname,
                    'option' : userSearch,
                    'data' : data

				}),
				{ headers: { 'Content-Type': 'application/json' }}
			);
            setList(response.data);
            console.log(response.data);
		} catch (err) {
			if (!err?.response) {
				setErrMsg('Ошибка сервера');
			} else if (err.response?.status === 500) {
				setErrMsg('Неверный пароль');
			}
		}
	};

    const cleanData = () => {
        setMission('')
        setFamilyname('')
        setData('')
        setList([])
    }


    return (
        <>
            <Header content='ПОДБОР ИМЕНИ'/>
            <div className="content">
                {(!isStudent && !isRegistered) ? 
                    <div className='noAccess'>
                        <p>Для получения доступа необходимо приобрести курс или зарегистрироваться</p>
                        <p><i><NavLink to='/register' className='link' > зарегистрироваться / войти в аккаунт</NavLink></i></p>
                        <p><i><NavLink to='/study' className='link' > посмотреть список доступных курсов</NavLink></i></p>
                    </div>  : 
                    <div>
                        <h3 style={{textAlign: 'center', color: 'white', marginBottom: '10px'}} >Подбор имени - важная часть в жизни человека. Если у родителей карты с разными основными числами, то его лучше предоставить специалисту</h3>
                        <div className="book">
                            <div className="leftPage">
                                <div className={classes.match}>
                                    <div className={classes.matchItem}>
                                        <p>Миссия:</p>
                                        <Input 
                                            type='number'
                                            value={mission}
                                            onChange={(e) => setMission(e.target.value)}
                                            required={true}
                                            placeholder='Миссия'
                                        ></Input>
                                    </div>

                                    <div className={classes.matchItem}>
                                        <p>Фамилия:</p>
                                        <Input 
                                            type='text'
                                            value={familyname}
                                            onChange={(e) => setFamilyname(e.target.value)}
                                            required={true}
                                            placeholder='Фамилия'
                                        ></Input>
                                    </div>

                                    <div className={classes.matchItem}>
                                        <p>Подобрать имя или отчество: </p>
                                        <Dropdown handleOptionChange={chooseSearch} option={searchOption} />
                                    </div>
                                        <Input 
                                            type='text'
                                            value={data}
                                            onChange={(e) => setData(e.target.value)}
                                            required={true}
                                            placeholder='Введите данные'
                                        ></Input>
                                    
                                    <div className={classes.matchItem}>
                                        <p>Выберите пол</p>
                                        <Dropdown handleOptionChange={chooseGender} option={genderDrop}/>
                                    </div>

                                    <Button 
                                        className='customBtn'
                                        onClick={searchName}
                                    >
                                        <span>Подобрать</span>
                                    </Button>

                                    <Button 
                                        className='customBtn'
                                        onClick={cleanData}
                                    >
                                        <span>Сбросить</span>
                                    </Button>
                                </div>
                            </div>
                            <div className="rightPage">
                                {list.length !== 0 ?
                                    <div>
                                        <h3 style={{textAlign: 'center', marginBottom: '10px'}} >Список, удовлетворяющий поиск</h3>
                                        {errMsg}
                                        <div className={classes.result}>
                                            {list.map((item, index) => 
                                                <p key={index} className={classes.result} >{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                    : <h4><i>Здесь будут результаты поиска</i></h4>
                                }
                            </div>
                        </div>
                    </div>
                }

                
            </div>
            <Footer />
        </>
    )
};

export default Name;
