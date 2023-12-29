import { useRef, useState, useEffect } from 'react';
import {faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import axios from '../../api/axios';

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,24}$/;

const Register = () => {

	const REGISTER_URL = '/profile/registration';
	
	const userRef = useRef();
	const errRef = useRef();

	const [email, setEmail] = useState('');
	const [token, setToken] = useState('');

	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [pwd, setPwd] = useState('');
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState('');
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setValidEmail(EMAIL_REGEX.test(email));
	}, [email]);

	useEffect(() => {
		setValidPwd(PWD_REGEX.test(pwd));
		setValidMatch(pwd === matchPwd);
	}, [pwd, matchPwd]);

	useEffect(() => {
		setErrMsg('');
	}, [email, pwd, matchPwd]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const v1 = EMAIL_REGEX.test(email);
		const v2 = PWD_REGEX.test(pwd);
		if (!v1 || !v2) {
			setErrMsg('Ошибка входа');
			return;
		}
		try {
			const response = await axios.post(
				REGISTER_URL,
				JSON.stringify({
					'id': Date.now(),
					'email': email,
					'password': pwd
				}),{headers: { 'Content-Type': 'application/json' }}
			);
			const accessToken = response?.data?.accessToken;
			setToken(response?.data?.accessToken)
			localStorage.setItem('token', accessToken)
			const roles = response?.data?.roles;
			localStorage.setItem('role', roles)
			setSuccess(true);
			setEmail('');
			setPwd('');
			setMatchPwd('');
			window.location.href = '/'
		} catch (err) {
			if (!err?.response) {
				setErrMsg('Ошибка сервера');
			} else if (err.response?.status === 409) {
				setErrMsg('Пользователь с таким именем уже существует');
			} else {
				setErrMsg('Ошибка регистрации');
			}
			errRef.current.focus();
		}
	};

	return (
		<div className='form__cotainer'>
				<section >
					<p
						ref={errRef}
						className={errMsg ? 'errmsg' : 'offscreen'}
						aria-live="assertive"
					>
						{errMsg}
					</p>
					<h1>Регистрация</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor="email">
							Почта:
							<FontAwesomeIcon
								icon={faCheck}
								className={validEmail ? 'valid' : 'hide'}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={validEmail || !email ? 'hide' : 'invalid'}
							/>
						</label>
						<input
							type="text"
							id="email"
							ref={userRef}
							autoComplete="off"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required
							aria-invalid={validEmail ? 'false' : 'true'}
							aria-describedby="uidnote"
							onFocus={() => setEmailFocus(true)}
							onBlur={() => setEmailFocus(false)}
							placeholder='Почта'
						/>
						<p
							id="uidnote"
							className={emailFocus && email && !validEmail ? 'instructions' : 'offscreen'}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							От 4 до 24 символов.
						</p>

						<label htmlFor="password">
							Пароль:
							<FontAwesomeIcon
								icon={faCheck}
								className={validPwd ? 'valid' : 'hide'}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={validPwd || !pwd ? 'hide' : 'invalid'}
							/>
						</label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPwd(e.target.value)}
							value={pwd}
							required
							aria-invalid={validPwd ? 'false' : 'true'}
							aria-describedby="pwdnote"
							onFocus={() => setPwdFocus(true)}
							onBlur={() => setPwdFocus(false)}
							placeholder='Пароль'
						/>
						<p
							id="pwdnote"
							className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							От 6 до 24 символов.
							<br />
							Пароль должен содержать буквы и цифры
						</p>

						<label htmlFor="confirm_pwd">
							Подтвердить пароль:
							<FontAwesomeIcon
								icon={faCheck}
								className={validMatch && matchPwd ? 'valid' : 'hide'}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={validMatch || !matchPwd ? 'hide' : 'invalid'}
							/>
						</label>
						<input
							type="password"
							id="confirm_pwd"
							onChange={(e) => setMatchPwd(e.target.value)}
							value={matchPwd}
							required
							aria-invalid={validMatch ? 'false' : 'true'}
							aria-describedby="confirmnote"
							onFocus={() => setMatchFocus(true)}
							onBlur={() => setMatchFocus(false)}
							placeholder='Повторите пароль'
						/>
						<p
							id="confirmnote"
							className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							Пароли не совпадают
						</p>

						<button
							className='customBtn register'
							disabled={!validEmail || !validPwd || !validMatch ? true : false}
						>
							Зарегистрироваться
						</button>
					</form>
					<p>
						<span className="line">
							<a href="/login">Войти в аккаунт</a>
						</span>
					</p>
				</section>
		</div>
	);
};

export default Register;
