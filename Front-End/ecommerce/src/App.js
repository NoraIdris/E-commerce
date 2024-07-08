import React from 'react'
import  {Container} from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import HomeScreen from './components/Screens/HomeScreen';
import SignupScreen from './components/Screens/SignupScreen';
import LoginScreen from './components/Screens/LoginScreen';
import CartScreen from './components/Screens/CartScreen';



function App() { 
  return (
   <> 
    <Router>
      <Header />
         <Routes>
           <Route exact path="/" element={<HomeScreen/>}></Route>
         </Routes>
         <Routes>
           <Route exact path="/Login" element={<LoginScreen/>}></Route>
         </Routes>
         <Routes>
           <Route exact path="/Singup" element={<SignupScreen/>}></Route>
         </Routes>
         <Routes>
           <Route exact path="/Cart" element={<CartScreen/>}></Route>
         </Routes>
    </Router>
   </>
  )
}

export default App;
