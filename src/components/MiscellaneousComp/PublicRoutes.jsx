import React, { useContext, useEffect } from 'react'
import todoListContext from '../../config/Auth'
import { Navigate } from 'react-router-dom'

const PublicRoutes = () => {
    // let { setAlert } = useContext(todoListContext)
    // useEffect(() => {
    //     setAlert("please login to access your tasks .")
    // })
    return (
        <Navigate to="/sign-in"></Navigate>
    )
}

export default PublicRoutes