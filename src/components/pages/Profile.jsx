import React, {useState, useEffect} from 'react';
import axios from 'axios'
import classes from './styles/profile.module.css'

import Header from '../blocks/header/Header'
import Footer from '../blocks/footer/Footer';
import InfoHead from '../UI/infoHead/infoHead';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';

import SupportItem from '../blocks/support/supportBlock';

const Home = () => {
  const token = localStorage.getItem('token')

  const HOME_URL = 'http://172.30.9.164/profile'
  const LOGOUT_URL = 'http://172.30.9.164/profile/logout'
  const SUPPORT_URL = 'http://172.30.9.164/support/get'
  const USER_URL = ''

  const [role, setRole] = useState('Студент')
  const [username, setUsername] = useState('Иван')
  const [lastname, setLastname] = useState('Иванович')
  const [familyname, setFamilyname] = useState('Иванов')
  const [birthday, setBirthday] = useState('1996-10-10')
  const [phone, setPhone] = useState('9541664864')
  const [email, setEmail] = useState('Fifkngf@tgfu.ru')


  const [support, setSupport] = useState([])
  const [foundItem, setfoundItem] = useState(support);
  const [errMsg, setErrMsg] = useState('')
  const [searchLine, setSearchLine] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(HOME_URL, { 
            headers: {
                Authorization: `Bearer ${token}`,
              },
                
            });
            console.log(response);
          } catch (error) {
              if(error.response?.status !== 200) {
               // window.location.href = '/login'
            }  
            console.error(error);
          }
        };
      
        fetchData();
      }, []);

      useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(SUPPORT_URL);
                setSupport(response.data);
            } catch (error) {
                if(error.response?.status === 404){
                    setErrMsg('Ничего не найдено');
                }
                console.error(error);
            }
        };
    
        fetchData();
      }, []);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(USER_URL);
            console.log(response.data);
          } catch (error) {
              if(error.response?.status === 404){
                setErrMsg('Ничего не найдено');
              }
              console.error(error);
            }
          };
          fetchData();
      }, []);

    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = support.filter((item) => {
            return item.question.toLowerCase().startsWith(keyword.toLowerCase());
        });
            setfoundItem(results);
        } else {
            setfoundItem(support);
        }
        setSearchLine(keyword);
    };

    const Logout = async () => {
        try {
            const response = await fetch(LOGOUT_URL, {
            method: "GET",
              headers: {
                "Authorization": `Bearer ${token},`,
              },
            })
              window.location.href = '/login'
        } catch (err){
            console.log(err);
        }
        
    }

    function updateData(){
      //axios.get(`http://172.30.9.164/profile/add?username=${username}&familyname=${familyname}&lastname=${lastname}&birthday=${birthday}&phone=${phone}&email=${email}`)
    }



    return (
      <>
        <Header />
        <div className="content">
          <div className='header__addBtn'>
            <InfoHead content='Личный кабинет' />
            <Button 
              className='customBtn'
              onClick={Logout}
            ><span>Выйти из профиля</span>
            </Button>
          </div>

          <div className="book">
            <div className="leftPage">
              <h2>Личные данные</h2>
              <div className={classes.profile}>
                <div className={classes.profileItem}>
                  <p>Статус: </p> <span>{role}</span>
                </div>
                <div className={classes.profileItem}>
                  <p>Фамилия: </p> 
                  <Input 
                    type='text'
                    value={familyname}
                    onChange={(e) => setFamilyname(e.target.value)}
                    required={true}
                  ></Input>
                </div>
                <div className={classes.profileItem}>
                  <p>Имя: </p> 
                  <Input 
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required={true}
                  ></Input>
                </div>
                <div className={classes.profileItem}>
                  <p>Отчество: </p> 
                  <Input 
                    type='text'
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required={true}
                  ></Input>
                </div>
                <div className={classes.profileItem}>
                  <p>Дата рождения: </p> 
                  <Input 
                    type='date'
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required={true}
                  ></Input>
                </div>
                <div className={classes.profileItem}>
                  <p>Телефон: </p> 
                  <Input 
                    type='number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required={true}
                  ></Input>
                </div>
                <div className={classes.profileItem}>
                  <p>Почта: </p> 
                  <Input 
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                  ></Input>
                </div>

                <Button 
                  className='customBtn'
                  onClick={updateData}
                >
                  <span>Обновить</span>
                </Button>
              </div>
            </div>
            <div className="rightPage">
              <h2>Поддержка</h2>
              <div className='header__addBtn'>
                    <Input 
                        type='search'
                        placeholder='Найти вопрос...'
                        onChange={(e) => filter(e)}
                    />
                    <a href="https://you.com/" target="blank" className="customLink">Задать вопрос</a>
                </div>
                    <div>
                        {foundItem.length === 0 ? 
                            (support.map((item, index) => (
                                <SupportItem item={item} key={index} ></SupportItem> 
                            ))) : foundItem.map((item, index) => (
                                <SupportItem item={item} key={index} ></SupportItem>))}

                        {foundItem.length === 0 && support.length === 0 && 
                          <p><i>Ничего не найдено...</i></p>}
                    </div>

            </div>

          </div>

          </div>
          <Footer />
        </>
    );
}

export default Home;
