import React from 'react'
import { Navigate } from 'react-router-dom';

type Props = {}

const ProtectRoutes = ({ children }) => {
  const isLoggedIn = !localStorage.getItem('access_token');
  return (
    isLoggedIn ? <Navigate to={"/login"} replace /> : children
  )
}

export default ProtectRoutes