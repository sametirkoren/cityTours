import React from 'react';
import './components/Navbar/navbar.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <React.Fragment>
        <Navbar/>
        <TourList/>
    </React.Fragment>
  );
}

export default App;
