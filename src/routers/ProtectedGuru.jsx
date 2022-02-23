import React from 'react'
import reactDom from 'react-dom';
import { Route, Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
    const user = {loggedIn : localStorage.getItem('role') == 2}
    return user && user.loggedIn
}

const ProtectedGuru = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet/> : <Navigate to="/dash-guru" />
}

export default ProtectedGuru