import React, {useState, useEffect} from 'react';
import axios from 'axios'


const Home = () => {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('roles')
  const [successLog, setSuccessLog] = useState(false);

  const HOME_URL = 'http://172.30.9.164/home'

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(HOME_URL, { 
            headers: {
                Authorization: `Bearer ${token}`,
              },
            });
          } catch (error) {
            if(error.response?.status === 401){
                window.location.href = '/login'
            }
            console.error(error);
          }
        };
    
        fetchData();
      }, [token]);




    const Logout = async () => {
        try {
            const response = await fetch("http://172.30.9.164/logout", {
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
             <div> Профиль </div>
            <button onClick={Logout} >Выйти</button>

            
             {successLog ? (
                <p>Выход из аккаунта</p>
            ) : (
                <p>В аккаунте</p>
            )
            } 
        </>
     );
}

export default Home;
