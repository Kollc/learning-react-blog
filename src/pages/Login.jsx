import React, { useContext } from 'react'
import MyInput from '../components/ui/input/MyInput';
import MyButton from '../components/ui/button/MyButton';
import {AuthContext} from '../context/index';

function Login() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  console.log(useContext(AuthContext));

  const login = (evt) => {
    evt.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }

  return (
    <div>
      <h1>Страница для логина</h1>
        <form onSubmit={login}>
          <MyInput type="text" placeholder="Введите логин"></MyInput>
          <MyInput type="password" placeholder="Введите пароль"></MyInput>
          <MyButton>Войти</MyButton>
        </form>
    </div>
  )
}

export default Login;
