import React from 'react'
import { useAppContext } from '../context/AppContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const { token } = useAppContext()

    if (!token) {
        return <Navigate to='/login' replace />
    }
    return children
}

export default ProtectedRoute