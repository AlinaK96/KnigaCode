import React, {useState, useEffect} from "react"
import axios from "../../../api/axios";

import classes from '../../pages/styles/match.module.css'

import Input from "../../UI/input/Input";
import Dropdown from "../../UI/dropdown/Dropdown";
import Button from "../../UI/button/Button";

const Name = () => {

    const MATCHNAME_URL = '/calculation/selection';

    const token = localStorage.getItem('token')
	const [errMsg, setErrMsg] = useState('');
    const [isDisabled, setIsDisabled] = useState(true)

    const [list, setList] = useState([])

    const [mission, setMission] = useState('')
    const [familyname, setFamilyname] = useState('')

    const [placeholder, setPlaceholder] = useState('')
    const [data, setData] = useState('')
    const [userSearch, setUserSearch] = useState('')
    const [gender, setGender] = useState('')

    const searchOption = [
        { title: 'Выберите один вариант', name: ''},
        { title: 'Подобрать имя', value: 'name', name: 'Введите отчество'},
        { title: 'Пободрать отчество', value: 'lastname', name: 'Введите имя' }
    ];

    const chooseSearch = (option, item) => {
        setUserSearch(option);
        setPlaceholder(item)
        setIsDisabled(false)
        if (item === ''){
            setIsDisabled(true)
        }
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
				{ headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`}}
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

    const validateFamName = (e) => {
        const inputValue = e.target.value;
        const russianRegex = /^[а-яёА-ЯЁ\s]+$/;
        if (russianRegex.test(inputValue) || inputValue === '') {
            setFamilyname(inputValue);
        }
    };
    
    const validateData = (e) => {
        const inputValue = e.target.value;
        const russianRegex = /^[а-яёА-ЯЁ\s]+$/;
        if (russianRegex.test(inputValue) || inputValue === '') {
            setData(inputValue);
        }
    };

    return (
        <>
            <div className={classes.calculate} >
                <h3 style={{ marginBottom: '10px'}} >* Подбор имени - важная часть в жизни человека. Если у родителей карты с разными основными числами, то его лучше предоставить специалисту</h3>
                <div className={classes.page}>
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
                                onChange={validateFamName}
                                required={true}
                                placeholder='Фамилия'
                            ></Input>
                        </div>

                        <div className={classes.matchItem}>
                            <p>Подобрать имя или отчество: </p>
                            <Dropdown handleOptionChange={chooseSearch} option={searchOption} />
                        </div>
                        <div className={classes.matchItem}>
                            <p>{placeholder}</p>
                            <Input 
                                type='text'
                                value={data}
                                onChange={validateData}
                                required={true}
                                placeholder={placeholder}
                                disabled={isDisabled}
                            ></Input>
                        </div>
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

                    <div className={classes.nameList}>
                        {list.length !== 0 ?
                            <div>
                                <h4 style={{ marginBottom: '10px'}} >Список, удовлетворяющий поиск</h4>
                                {errMsg}
                                <div className={classes.result}>
                                    {list.map((item, index) => 
                                        <p key={index} className={classes.result} >{item.value}</p>
                                    )}
                                </div>
                            </div>
                        : <h3><i>Здесь будут результаты поиска</i></h3>
                        }    
                    </div>
                                
                </div>
            </div>

        </>
    )
};

export default Name;
