import { useRef, useState, useEffect, useContext } from 'react';
import axios from './api/axios';
import {Context} from './context/context'

import AuthContext from './context/AuthProvider';
import Home from './components/pages/Home'

const LOGIN_URL = '/auth';

const Login = () => {
	
	const { setAuth } = useContext(AuthContext);
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [pwd, setPwd] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);
	const [token, setToken] = useState('');

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				LOGIN_URL,
				JSON.stringify({ 
					'username': user,
					'password': pwd
				}),
				{
					headers: { 'Content-Type': 'application/json' }

				}
			);

			const accessToken = response?.data?.accessToken;
			setToken(response?.data?.accessToken)
			localStorage.setItem('token', accessToken)
			const roles = response?.data?.roles;
			setAuth({ user, pwd, roles, accessToken });
			setUser('');
			setPwd('');
			setSuccess(true);	
			window.location.href = '/home'

		} catch (err) {
			if (!err?.response) {
				setErrMsg('Ошибка сервера');
			} else if (err.response?.status === 401) {
				setErrMsg('Неверный логин или пароль');
			}  
			errRef.current.focus();
		}
	};

	return (
		<div className='form__cotainer'>
				<section>
					<p
						ref={errRef}
						className={errMsg ? 'errmsg' : 'offscreen'}
						aria-live="assertive"
					>
						{errMsg}
					</p>
					<h1>Войти</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor="username">Имя пользователя:</label>
						<input
							type="text"
							id="username"
							ref={userRef}
							autoComplete="off"
							onChange={(e) => setUser(e.target.value)}
							value={user}
							required
						/>

						<label htmlFor="password">Пароль:</label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPwd(e.target.value)}
							value={pwd}
							required
						/>
						<button>Войти</button>
					</form>
					<p>
						Нет аккаунта?
						<br />
						<span className="line">
							<a href="/register">Зарегистрироваться</a>
						</span>
					</p>
				</section>
		</div>
	);
};

export default Login;
