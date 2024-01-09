import React, {useState, useEffect} from "react"
import classes from './styles/calc.module.css'
import axios from '../../api/axios';

import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";

const Calculation = () => {

    const VARIFY_URL = '/calculation'

    const token = localStorage.getItem('token')
    const [errMsg, setErrMsg] = useState('')
    const [info, setInfo] = useState(false)

    const [role, setRole] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(VARIFY_URL, { 
                    headers: {Authorization: `Bearer ${token}`},
                });
                setRole(response.data.role)
            } catch (error) {
                if(error.response?.status !== 200) {
                    setErrMsg('Ошибка доступа')
                }  else if (error.response?.status === 401){
                    setRole('notAuth')
                }
                    console.error(error);
                }
            };
            fetchData();
    }, []);

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
                <Header content='ТАЙНЫ ЛИЧНОГО КОДА' />
                <div className="content">
                    <div className={classes.calculate}>
                        <div className={classes.calc__header}>
                            <div className={classes.info}>
                                <h3 onClick={() => setInfo(visible => !visible)} style={{cursor: 'pointer', textDecoration: 'underline'}} >Как правильно ввести данные?</h3>
                                {(info) &&
                                <div>
                                    <p>- Фамилия должна быть ДЕВИЧЬЯ (та, что была до замужества);</p>
                                    <p>- Нет разницы между буквами Ё и Е;</p>
                                    <p>- Если у человека нет отчества, разделите его фамилию пополам и впишите половины в разные поля;</p>
                                    <p>- Если двойная фамилия, то пишите её слитно (без пробелов и тире);</p>
                                    <p>- Месяц пишите числом, а не словом;</p>
                                </div>}
                            </div>

                            <div>
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
                                        className={classes.calc}
                                        onClick={Calculate}
                                    >
                                        <span>Посчитать</span>
                                    </Button>

                                    <Button 
                                        className={classes.clean}
                                        onClick={reset}
                                    >
                                    <span>Сбросить</span>
                                    </Button>
                                </div>
                            </div>

                        </div>
                        
                        
                        <div className={classes.krug}>
                        </div>
                    </div> 

                </div>
                <Footer />
            </>
    )
};

export default Calculation;
