import React, {useState} from "react"
import classes from './styles/calc.module.css'
import axios from '../../api/axios';

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";

const Calculation = () => {

    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')

    const [username, setUsername] = useState('Иван')
    const [lastname, setLastname] = useState('Иванович')
    const [familyname, setFamilyname] = useState('Иванов')
    const [birthday, setBirthday] = useState('10')
    const [mounth, setMounth] = useState('октябрь')
    const [year, setYear] = useState('2005')

    function Calculate(){}
    function reset(){
        setUsername('')
        setLastname('')
        setFamilyname('')
        setBirthday('')
        setMounth('')
        setYear('')
    }

    return (
            <>
                <Header content='Тайны личного кода' />
                <div className="content">
                    {/* <div className={classes.calculate}>
                        <div className={classes.calcInput}>
                            <Input 
                                type='text'
                                value={familyname}
                                onChange={(e) => setFamilyname(e.target.value)}
                                required={true}
                                placeholder='Фамилия'
                            />
                            <Input 
                                type='text'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required={true}
                                placeholder='Имя'
                            />
                            <Input 
                                type='text'
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                required={true}
                                placeholder='Отчество'
                            />
                        </div>
                        <div className={classes.calcInput}>
                            <Input 
                                type='number'
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                                required={true}
                                placeholder='день рождения'
                            />
                            <Input 
                                type='text'
                                value={mounth}
                                onChange={(e) => setMounth(e.target.value)}
                                required={true}
                                placeholder='месяц рождения'
                            />
                            <Input 
                                type='number'
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                required={true}
                                placeholder='год рождения'
                            />
                        </div>
                        <div className={classes.calcInput}>
                            <Button 
                                className='customBtn'
                                onClick={Calculate}
                            >
                                <span>Посчитать</span>
                            </Button>

                            <Button 
                                className='customBtn'
                                onClick={reset}
                            >
                            <span>Сбросить</span>
                            </Button>
                        </div>
                        <div className={classes.krug}>
                        </div>
                    </div> */}

                </div>
                <Footer />
            </>
    )
};

export default Calculation;
