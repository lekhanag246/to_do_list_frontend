import React, { useContext, useState } from 'react'
import css from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/axiosInstance';
import todoListContext from '../../config/Auth';
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  let navigate = useNavigate();
  const { setAlert } = useContext(todoListContext)


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axiosInstance.post('/users/sign-up', { email, password, username })
      setAlert({ status: data.status, message: data.message })
      navigate('/sign-in', { replace: true })
    } catch (error) {
      if (error.response) {
        let { status, message } = error.response.data
        setAlert({ status, message })
      }
      // console.log("error registering user", error.message)
      //TODO HANDLE other errors other than back end or code 
    }

  }
  return (
    <div className={css.login_container}>
      <section className={css.login_head}>
        <h3 className={css.login_title}>Create an Account</h3>
        <p className={css.login_message}>Make managing your daily tasks effortless. Let's get started.</p>
      </section>
      <section className={css.login_body} >
        <form onSubmit={handleRegister} className={css.login_form}>
          <input className={css.login_inp} type="text" placeholder='user name' onChange={(e) => setUserName(e.target.value)} />
          <br />
          <input className={css.login_inp} type="text" placeholder='email id' onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input className={css.login_inp} type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button className={css.login_btn}>Create Account</button>
        </form>
      </section>
      <section className={css.login_foot} style={{ padding: "1em 0 0" }}>
        <p>Already have an account ? <Link to="/sign-in">Login</Link>.</p>
        <p className={css.termsCondition}>
          By creating an account ,you agree to our Terms and have read and acknowledge the
          Global Privacy Statement.
        </p>
        {/* <p className={css.termsCondition}>
          By creating an account ,you agree to our <a href="#">Terms</a> and have read and acknowledge the
          <a href="/"> Global Privacy Statement</a>.
        </p> */}
      </section>
    </div>
  )
}

export default Register;