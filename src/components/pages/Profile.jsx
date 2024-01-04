import React, {useState, useEffect} from 'react';
import axios from '../../api/axios';
import classes from './styles/profile.module.css'

import Header from '../blocks/header/Header'
import Footer from '../blocks/footer/Footer';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';

import SupportItem from '../blocks/support/supportBlock';

const Home = () => {

  const token = localStorage.getItem('token')
  const [isAuth, setIsAuth] = useState(false)


  const [role, setRole] = useState('')
  const [username, setUsername] = useState('')
  const [lastname, setLastname] = useState('')
  const [familyname, setFamilyname] = useState('')
  const [birthday, setBirthday] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  //const HOME_URL = 'http://172.30.9.164/profile'
  const HOME_URL = '/profile'
  
  const LOGOUT_URL = '/logout'
  const SUPPORT_URL = '/support/get'
  // const USER_UPDATE = 'http://172.30.9.164/user' 

  const [support, setSupport] = useState([])
  const [foundItem, setfoundItem] = useState(support);
  const [errMsg, setErrMsg] = useState('')
  const [searchLine, setSearchLine] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(HOME_URL, { 
              headers: {Authorization: `Bearer ${token}`},
            });
            console.log(response);
            setIsAuth(true)
            setRole(response.data.role)
            setUsername(response.data.username)
            setFamilyname(response.data.familyname)
            setLastname(response.data.lastname)
            setBirthday(response.data.birthday)
            setPhone(response.data.phone)
            setEmail(response.data.email)
          } catch (error) {
              if(error.response?.status !== 200) {
                window.location.href = '/login'
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
            headers: {Authorization: `Bearer ${token}`},
          })
            window.location.href = '/login'
          } catch (err){
            console.log(err);
          }
    }

    function updateData(){
      let newData = { username: username, lastname: lastname, familyname: familyname, birthday: birthday, phone: phone, email:email };
      
    //axios.put(USER_UPDATE, newData)
    //     .then(response => {
    //       console.log('Успешно отправлен PUT-запрос', response);
    //     })
    //     .catch(error => {
    //       console.error('Ошибка при отправке PUT-запроса', error);
    //     });
    }

    return (
      <>
        {isAuth ? 
        <div>
          <Header content='Личный кабинет' />
          <div className="content">
              <div className={classes.logoutBtn}>
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
                        placeholder='Фамилия'
                      ></Input>
                    </div>
                    <div className={classes.profileItem}>
                      <p>Имя: </p> 
                      <Input 
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required={true}
                        placeholder='Имя'
                      ></Input>
                    </div>
                    <div className={classes.profileItem}>
                      <p>Отчество: </p> 
                      <Input 
                        type='text'
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required={true}
                        placeholder='Отчество'
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
                        placeholder='Телефон'
                      ></Input>
                    </div>
                    <div className={classes.profileItem}>
                      <p>Почта: </p> 
                      <Input 
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                        placeholder='Почта'
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
        </div>
        : <p></p> }
      </>
    );
}

export default Home;
