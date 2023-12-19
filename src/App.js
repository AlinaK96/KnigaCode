import Register from './components/pages/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Author from './components/pages/Author';
import Best from './components/pages/Best'
import Calculation from './components/pages/Calculation'
import Consultation from './components/pages/Consultation'
import Contacts from './components/pages/Contacts'
import Book from './components/pages/Book';
import Feedback from './components/pages/Feedback'
import Forecast from './components/pages/Forecast'
import Match from './components/pages/Match'
import Parents from './components/pages/Parents'
import Stars from './components/pages/Stars'
import Study from './components/pages/Stydy'
import Support from './components/pages/Support'
import Video from './components/pages/Video'

function App() {

	return (
		<main className="App">
			<Router>
				<Routes>
					<Route path="/register" exact element={<Register />} />
					<Route path="/login" exact element={<Login/>} />
					<Route path="/profile" element={<Home />} />
                    <Route path="/author" element={<Author />} /> 
                    <Route path="/best" element={<Best />} />
					<Route path="/" element={<Calculation />} />
					<Route path="/consultaion" element={<Consultation />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/book" element={<Book />} />
					<Route path="/feedback" element={<Feedback />} />
					<Route path="/forecast" element={<Forecast />} />
					<Route path="/match" element={<Match />} />
					<Route path="/parents" element={<Parents />} />
					<Route path="/stars" element={<Stars />} />
					<Route path="/study" element={<Study />} />
					<Route path="/support" element={<Support />} />
					<Route path="/video" element={<Video />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;

