import { useRef, useState, useEffect, useContext } from 'react';
import axios from '../../api/axios';

import AuthContext from '../../context/AuthProvider';


const Login = () => {
	
	const LOGIN_URL = '/profile/auth';

	const { setAuth } = useContext(AuthContext);
	const userRef = useRef();
	const errRef = useRef();

	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);
	const [token, setToken] = useState('');

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg('');
	}, [email, pwd]);

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await axios.post(
				LOGIN_URL,
				JSON.stringify({ 
					'email': email,
					'password': pwd
				}),
				{ headers: { 'Content-Type': 'application/json' }}
			);
			const accessToken = response?.data?.accessToken;
			setToken(response?.data?.accessToken)
			localStorage.setItem('token', accessToken)
			const roles = response?.data?.roles;
			setAuth({ user: email, pwd, roles, accessToken });
			setEmail('');
			setPwd('');
			setSuccess(true);	
			window.location.href = '/profile'
		} catch (err) {
			if (!err?.response) {
				setErrMsg('Ошибка сервера');
			} else if (err.response?.status === 401) {
				setErrMsg('Неверный пароль');
			} else if (err.response?.status === 402) {
				setErrMsg('Неверный email');
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
					> {errMsg} </p>
					<h1>Войти</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor="email">Почта:</label>
						<input
							type="text"
							id="email"
							ref={userRef}
							autoComplete="off"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required
							placeholder='Почта'
						/>

						<label htmlFor="password">Пароль:</label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPwd(e.target.value)}
							value={pwd}
							required
							placeholder='Пароль'
						/>
						<button className='customBtn'>Войти</button>
					</form>

					<span className="line">
						<a href="/register"> Нет аккаунта? <br></br>Зарегистрироваться</a>
					</span>
					
				</section>
		</div>
	);
};

export default Login;
