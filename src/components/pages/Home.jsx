import React, {useState, useEffect} from 'react';
import axios from 'axios'

import Header from '../blocks/header/Header'
import Footer from '../blocks/footer/Footer';

const Home = () => {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('roles')
  const [successLog, setSuccessLog] = useState(false);

  const HOME_URL = 'http://172.30.9.164/profile'
  const LOGOUT_URL = 'http://172.30.9.164/profile/logout'

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(HOME_URL, { 
            headers: {
                Authorization: `Bearer ${token}`,
              },
              
            });
            setSuccessLog(true)
          } catch (error) {
            if(error.response?.status === 401){
              setSuccessLog(false)
                window.location.href = '/login'
            }
            console.error(error);
          }
        };
    
        fetchData();
      }, []);




    const Logout = async () => {
        try {
            const response = await fetch(LOGOUT_URL, {
            method: "GET",
              headers: {
                "Authorization": `Bearer ${token},`,
              },
            })
              setSuccessLog(true)
              window.location.href = '/login'
        } catch (err){
            console.log(err);
        }
        
    }

    return (
      <>
        <Header />
        <div className="content">

        
          <div> Профиль </div>
          <p>мои курсы</p>
            <button 
            className='customBtn'
              onClick={Logout} >Выйти</button>

            
            {successLog ? (
                <a>Выход из аккаунта</a>
            ) : (
                <a>не в аккаунте</a>
            )
            } 
          
          <Footer />
          </div>
        </>
    );
}

export default Home;
