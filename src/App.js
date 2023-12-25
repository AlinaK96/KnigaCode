import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/pages/Login';
import Register from './components/pages/Register';

//header
import Profile from './components/pages/Profile'
import Author from './components/pages/Author';
import Calculation from './components/pages/Calculation'
import Match from './components/pages/Match'
import Plot from './components/pages/Plot'
import Name from './components/pages/Name'
import Forecast from './components/pages/Forecast'

//footer
import Consultation from './components/pages/Consultation'
import Study from './components/pages/Stydy'
import Book from './components/pages/Book';
import Archive from './components/pages/Archive';
import Stars from './components/pages/Stars'
import Video from './components/pages/Video'
import Education from './components/pages/Education';
import Almanac from './components/pages/Almanac';



function App() {

	return (
		<main className="App">
			<Router>
				<Routes>
					<Route path="/register" exact element={<Register />} />
					<Route path="/login" exact element={<Login/>} />

					<Route path="/profile" element={<Profile />} />
                    <Route path="/author" element={<Author />} /> 
					<Route path="/" element={<Calculation />} />
					<Route path="/match" element={<Match />} />
					<Route path="/plot" element={<Plot />} />
					<Route path="/name" element={<Name />} />
					<Route path="/forecast" element={<Forecast />} />
					<Route path="/archive" element={<Archive />} />

					<Route path="/consultaion" element={<Consultation />} />
					<Route path="/study" element={<Study />} />
					<Route path="/book" element={<Book />} />
					<Route path='/almanac' element={<Almanac />} />
					<Route path="/stars" element={<Stars />} />
					<Route path="/video" element={<Video />} /> 
					<Route path="/edu" element={<Education />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;

