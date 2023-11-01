import React from 'react'
import css from './PNF.module.css'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
    return (
        <article className={css.pnf_art}>
            <div className={css.smileyFace}>
                <div className={css.eyes}></div>
                <div className={css.eyes}></div>
                <div className={css.mouth}></div>
            </div>

            <h1>404 page not found </h1>
            <p>The page you are looking for does not exist or an error occurred .</p>
            <p>Go back, or head over to <Link to='/'>todo_list.com</Link> to choose a new direction .</p>
        </article>
    )
}

export default PageNotFound