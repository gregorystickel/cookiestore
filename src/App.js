import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import OrderScreen from './screens/OrderScreen'
import ProfileScreen from './screens/ProfileScreen'
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import OrderSummaryScreen from './screens/OrderSummaryScreen'
export const AuthContext = React.createContext(); 

function App() {
  

  return (
    
    <div className="App">
      <Header />
      
      <Routes>
        <Route index element={<HomeScreen  />} />
        <Route path="/cart" element={<CartScreen />}/>
        <Route path="/order" element={<OrderScreen />}/>
        <Route path="/profile" element={<ProfileScreen />}/>  
        <Route path="/signup" element={<SignupScreen />}/>
        <Route path="/login" element={<LoginScreen />}/>
        <Route path="/ordersummary" element={<OrderSummaryScreen />}/>           
      </Routes> 
      
      <Footer />
    </div>
    
  );
}

export default App;
