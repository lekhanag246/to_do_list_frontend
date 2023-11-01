import React, { useContext, useEffect, useRef, useState } from 'react'
import css from './Alert.module.css'
import todoListContext from '../../config/Auth'
const Alert = () => {
  let { alert, setAlert } = useContext(todoListContext)
  const [disappear, setDisappear] = useState(true)

  useEffect(() => {
    if (alert.message) {
      setDisappear(false)
      let timer = setTimeout(() => {
        setAlert({ status: "", message: "" })
        setDisappear(true);
      }, 1500)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [alert.message])

  const statusColor = (status) => {
    if (status == "error" || status == "fail") {
      return {
        backgroundColor: "#C21010"
      }
    }
    if (status == "success") {
      return {
        backgroundColor: "#5D9C59"
      }
    }
  }

  return (
    <div className={css.alert} style={disappear ? { display: "none" } : statusColor(alert.status)}>
      <div className={css.alertContent}>
        <p>{alert.message}</p>
        {/* <i style={{ position: "absolute", top: "5px", right: "10px" }}
          className="fa fa-times" aria-hidden="true" onClick={() => { setDisappear(false) }}></i> */}
      </div>
    </div>
  )
}

export default Alert;
