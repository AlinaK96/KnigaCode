import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './components/pages/Home';
import { useHistory } from "react-router-dom" 

function App() {

	return (
		<main className="App">
			<Router>
				<Routes>
					<Route path="/" exact element={<Register />} />
					<Route path="/login" exact element={<Login/>} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;

