import React from 'react';
// import Todos from './components/Todos'
// import Header from './components/Header'
import NavBar from './components/NavBar/MainNav'
import SecondaryNav from './components/NavBar/SecondaryNav'
import LandingPage from './components/Landingpage/LandingPage';
import Learnable from './components/learnable/Learnable'
import SoftDev from './components/learnableSoftDev/SoftDev'
import ProductDes from './components/learnableProdDes/ProductDes'
import Footer from './components/Footer/Footer'
import SecondFooter from './components/Footer/SecondFooter'


function App() {
  return (
    <>
      {/* <Header/>
      <Todos /> */}
      <NavBar/>
      {/* <SecondaryNav/> */}
       <LandingPage/>
      {/* <ProductDes/> */}
      <SecondFooter/>
      {/* <Learnable/> */}
      {/* <SoftDev/> */}
     
      <Footer/>
    </>
  );
}

export default App;
