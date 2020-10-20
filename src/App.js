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
import {BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'



function App() {
  return (
  
    <Router>
    <NavBar/>
      {/* <SecondaryNav/> */}

      <Switch>
        <Route path="/" exact component = {Learnable}/>
        <Route path="/landing-page" component = {LandingPage}/>
        <Route path="/learnable-product-designer" component = {ProductDes}/>
        <Route path="/learnable-software-developer" component = {SoftDev}/>
     
      
       <LandingPage/>
      {/* <ProductDes/> */}
      
      {/* <Learnable/> */}
      {/* <SoftDev/> */}

     </Switch>
      <SecondFooter/>
      <Footer/>

      </Router>
  );
}

export default App;
