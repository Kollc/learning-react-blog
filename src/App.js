import React, { useState, useEffect }  from 'react'
import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import MyNavbar from './components/ui/navbar/MyNavbar';
import AppRouter from './components/AppRouter';
import {AuthContext} from './context';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('auth'))
    {
      setIsAuth(true);
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
      <BrowserRouter>
        <MyNavbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
