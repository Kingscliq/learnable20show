import React from 'react';
// import Todos from './components/Todos'
// import Header from './components/Header'
import NavBar from './components/NavBar/MainNav'
import SecondaryNav from './components/NavBar/SecondaryNav'
import LandingPage from './components/Landingpage/LandingPage';
import Learnable from './components/learnable/Learnable'
import SoftDev from './components/learnableSoftDev/SoftDev'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      {/* <Header/>
      <Todos /> */}
      <NavBar/>
      <SecondaryNav/>
      {/* <Learnable/> */}
      <SoftDev/>
      {/* <LandingPage/> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
