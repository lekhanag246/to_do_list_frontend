import React, { useContext, useState } from 'react'
import css from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/axiosInstance';
import todoListContext from '../../config/Auth';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAlert, setToken } = useContext(todoListContext)

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axiosInstance.post('users/sign-in', { email, password })
      setToken(data.accessToken)

      setAlert({ status: data.status, message: data.message })
      navigate('/', { replace: true })
    } catch (error) {
      if (error.response) {
        let { status, message } = error.response.data
        setAlert({ status, message })
      }
    }
  }

  return (
    <div className={css.login_container}>
      <section className={css.login_head}>
        <h3 className={css.login_title}>Welcome Back</h3>
        <p className={css.login_message}>It's nice to see you again! <br /> Login to continue to your account.</p>
      </section>
      <section className={css.login_body} >
        <form onSubmit={handleLogin} className={css.login_form}>
          <input autoComplete='on'
            className={css.login_inp} type="text" placeholder='email id' onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input autoComplete='current-password'
            className={css.login_inp} type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
          <br />
          <Link to='/forgot-password' className={css.forgot_pwd}>forgot password ?</Link>
          <button className={css.login_btn}>login</button>
        </form>
      </section>
      <section className={css.login_foot}>
        <p>Don't have an account yet ? <Link to="/sign-up">Create account</Link>.</p>
      </section>
    </div>
  )
}

export default Login


