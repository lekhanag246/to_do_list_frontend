import React, { useContext, useState } from 'react'
import css from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/axiosInstance';
import todoListContext from '../../config/Auth';

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const { setAlert } = useContext(todoListContext);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("forgot password", email);
        try {
            let { data } = await axiosInstance.post('users/forgot-password', { email })
            setAlert({ status: data.status, message: data.message })
            navigate('/sign-in', { replace: true })
        } catch (error) {
            if (error.response) {
                console.log(error.response)
                let { status, message } = error.response.data
                setAlert({ status, message })
            }
        }
    }
    return (
        <div className={css.login_container}>
            <section className={css.login_head} style={{ padding: "1em 0" }}>
                <i className="fa fa-exclamation-circle" aria-hidden="true" style={{ fontSize: "5em", margin: "0.2em 0", color: "#bf2b2b" }}></i>
                <h3 className={css.login_title}>Forgot your password ?</h3>
                <p className={css.login_message}>enter your registered email <br /> and we'll send you a reset password link.</p>
            </section>
            <section className={css.login_body}>
                <form onSubmit={handleSubmit} className={css.login_form}>
                    <input className={css.login_inp} type="text" placeholder='email id' onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <button className={css.login_btn}>submit</button>
                </form>
            </section>
            <section className={css.login_foot}>
                <p>back to <Link to="/sign-in">login</Link></p>
            </section>
        </div>
    )
}

export default ForgetPassword


