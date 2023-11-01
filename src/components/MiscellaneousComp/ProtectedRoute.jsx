import React, { useContext } from 'react'
import todoListContext from '../../config/Auth'
import PublicRoutes from './PublicRoutes';

const ProtectedRoute = ({ children }) => {
    let { token } = useContext(todoListContext);
    if (!token) {
        return <PublicRoutes />
    } else {
        return children;
    }

}

export default ProtectedRoute