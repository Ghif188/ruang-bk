import React from 'react'
import reactDom from 'react-dom';
import { Route, Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
    const user = {loggedIn : localStorage.getItem('role') === '3'}
    return user && user.loggedIn
}

const ProtectedMurid = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet/> : <Navigate to="/login" />
}

export default ProtectedMurid