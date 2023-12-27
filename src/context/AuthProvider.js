import { createContext, useState } from 'react';
import Popup from '../components/UI/popUp/AlertPop';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({});

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			<Popup />
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
