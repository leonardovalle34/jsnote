import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screen/home';
import AuthScreen from './screen/auth';
import NotesScreen from './screen/notes';
import RegisterScreen from './screen/auth/register';
import PrivateRoutes from './components/auth/privateroutes';
import UserEdit from './screen/users/edit/users';

const RoutesIn = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<HomeScreen/>}/>
                <Route exact path='/login' element={<AuthScreen/>}/>
                <Route exact path='/register' element={<RegisterScreen/>}/>
                <Route element={<PrivateRoutes />}>
                        <Route exact path='/notes' element={<NotesScreen />} />
                </Route>
                <Route element={<PrivateRoutes />}>
                        <Route exact path='/users/edit' element={<UserEdit />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesIn