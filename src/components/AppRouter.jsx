import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routs';
import {AuthContext} from '../context';
import {Navigate } from "react-router-dom";
import MyLoader from './ui/loader/MyLoader';

function AppRouter() {
  const {isAuth, setIsAuth, isLoading} = useContext(AuthContext);

  if(isLoading) {
    return <MyLoader/>
  }

  return (
    isAuth
      ?
      <Routes>
        {
          privateRoutes.map(route => <Route key={route.path} path={route.path} element={route.component} exact={route.exact} />)
        }
        <Route path="*" element={<Navigate to ="/posts" />}/>
      </Routes>
      :
      <Routes>
        {
          publicRoutes.map(route => <Route key={route.path} path={route.path} element={route.component} exact={route.exact} />)
        }
        <Route path="*" element={<Navigate to ="/login" />}/>
      </Routes>
  )
}

export default AppRouter;
