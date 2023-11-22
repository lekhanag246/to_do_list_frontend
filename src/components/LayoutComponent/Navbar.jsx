import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import todoListContext from '../../config/Auth'
import axiosInstance from '../../config/axiosInstance'
const Navbar = () => {

  let { token } = useContext(todoListContext)
  let { setAlert, setToken } = useContext(todoListContext)

  async function handleLogout() {
    try {
      let { data } = await axiosInstance.get('/users/sign-out')
      setAlert({ status: data.status, message: data.message })
      setToken("")

    } catch (error) {
      if (error.response) {
        let { status, message } = error.response.data
        setAlert({ status, message })
      }
    }
  }

  return (
    <div className="navbar">
      <h1 className='logo'>task_master</h1>
      <nav>
        <NavLink className={token ? "navlink " : "navlink inactiveTasks"} to='/'>My Tasks</NavLink>
        {token == "" ?
          <>
            <NavLink className="navlink" to='sign-in'>Sign In</NavLink>
            <NavLink className="navlink" to='/sign-up'>Sign Up</NavLink>
          </> :
          <button type="button" className="navlink logout" onClick={handleLogout}>Sign Out</button>
        }
      </nav>
    </div>
  )
}

export default Navbar