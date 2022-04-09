import React from 'react'
import reactDom from 'react-dom';
import { Route, Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
    const user = {loggedIn : !localStorage.getItem('token')}
    return user && user.loggedIn
}

const ProtectedLogin = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet/> : <Navigate to="/404-error" />
}

export default ProtectedLogin