import React, {useState, useEffect} from "react"
import { NavLink } from 'react-router-dom';
import axios from "axios";

import classes from './styles/match.module.css'

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import Input from "../UI/input/Input";
import Dropdown from "../UI/dropdown/Dropdown";
import Button from "../UI/button/Button";

const Name = () => {

    const MATCHNAME_URL = 'http://109.171.3.245:8080/calculation/selection';

    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')
	const [errMsg, setErrMsg] = useState('');

    const isStudent = false
    const isRegistered = true

    const [list, setList] = useState([])

    const [mission, setMission] = useState('1')
    const [familyname, setFamilyname] = useState('Сидоров')
    const [data, setData] = useState('Маша')
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
    }


    return (
        <>
            <Header content='Подбор имени'/>
            <div className="content">
                {(!isStudent && !isRegistered) ? 
                    <div className='noAccess'>
                        <p>Для получения доступа необходимо приобрести курс или зарегистрироваться</p>
                        <p><i><NavLink to='/register' className='link' > зарегистрироваться / войти в аккаунт</NavLink></i></p>
                        <p><i><NavLink to='/study' className='link' > посмотреть список доступных курсов</NavLink></i></p>
                    </div>  : 
                    <div className="plainBG">
                        <div className={classes.name__match}>
                            <div>
                                <p>Миссия: </p> 
                                <Input 
                                    type='number'
                                    value={mission}
                                    onChange={(e) => setMission(e.target.value)}
                                    required={true}
                                    placeholder='Миссия'
                                ></Input>
                                <p>Фамилия: </p> 
                                <Input 
                                    type='text'
                                    value={familyname}
                                    onChange={(e) => setFamilyname(e.target.value)}
                                    required={true}
                                    placeholder='Фамилия'
                                ></Input>
                                <p>Подобрать имя или отчество: </p> 
                                <Dropdown handleOptionChange={chooseSearch} option={searchOption} />
                                <Input 
                                    type='text'
                                    value={data}
                                    onChange={(e) => setData(e.target.value)}
                                    required={true}
                                    placeholder='Введите данные'
                                ></Input>
                                <Dropdown handleOptionChange={chooseGender} option={genderDrop}/>

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
                            <div>
                                <p>Подбор имени - важная часть в жизни человека</p>
                                <p>Если у родителей карты с разными основными числами, то подбор имени лучше предоставить специалисту</p>
                            </div>
                        </div>

                        {list.length !== 0 &&
                        <div>
                            <h3>Список, удовлетворяющий поиск</h3>
                            {errMsg}
                            {list.map((item, index) => 
                                <p key={index}>{item.value}</p>
                            )}
                        </div>}
                    </div>
                }

                
            </div>
            <Footer />
        </>
    )
};

export default Name;
