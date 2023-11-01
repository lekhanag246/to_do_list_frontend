import React from 'react'
import css from './Loader.module.css'
const Loader = () => {
    return (
        <span className={css.loader}></span>

    )
}

export const Loader2 = () => {
    return <div className={css["loader2-container"]}>
        <div className={css["square-circle-5"]}></div>
    </div>
}
export default Loader;