import {Route}  from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import { useState } from 'react';
import UserList from './components/UserList/UserList';
function App() {
  const[isLogin,setIsLogin]=useState(false);
  
  localStorage.setItem('user','r@gmail.com');
  localStorage.setItem('pass','r');
  
  const isLoginHandler =((val)=>{
    
    setIsLogin(val);
    
  })

  return (
    <div className="App">
      <Header login={isLogin}/>
      {!isLogin&&<LoginForm islogged={isLoginHandler}/>}
      {isLogin&&<UserList/>}
    </div>
  );
}

export default App;
