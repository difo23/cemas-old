import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Body from './Components/Body';
import './App.css';



function App() {
	return (
		<div className="app">
			<div className="header">
				<NavBar />
			</div>
			<div className="body">
				<Body/>
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}

export default App;
