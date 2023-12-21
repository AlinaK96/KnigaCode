import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/pages/Login';
import Register from './components/pages/Register';

//header
import Home from './components/pages/Home';
import Author from './components/pages/Author';
import Best from './components/pages/Best'
import Calculation from './components/pages/Calculation'
import Match from './components/pages/Match'
import Parents from './components/pages/Parents'
import Forecast from './components/pages/Forecast'

//footer
import Consultation from './components/pages/Consultation'
import Study from './components/pages/Stydy'
import Book from './components/pages/Book';
import Archive from './components/pages/Archive';
import Stars from './components/pages/Stars'
import Video from './components/pages/Video'
import Edit from './components/pages/Edit';
import Education from './components/pages/Education';

//extra
import Support from './components/pages/extra/Support'
import Feedback from './components/pages/extra/Feedback'
import Contacts from './components/pages/extra/Contacts'


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
					<Route path="/match" element={<Match />} />
					<Route path="/parents" element={<Parents />} />
					<Route path="/forecast" element={<Forecast />} />

					<Route path="/consultaion" element={<Consultation />} />
					<Route path="/study" element={<Study />} />
					<Route path="/book" element={<Book />} />
					<Route path="/archive" element={<Archive />} />
					<Route path="/stars" element={<Stars />} />
					<Route path="/video" element={<Video />} /> 
					<Route path="/edu" element={<Education />} />
					<Route path="/edit" element={<Edit/>} /> 

					<Route path="/feedback" element={<Feedback />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/support" element={<Support />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;

