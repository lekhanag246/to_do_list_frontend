import React from 'react'


const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <footer className='d-flex'>
            <p className='footerContent'>@todo_list {year} by <span>PUSHPA</span></p>
        </footer>
  )
}

export default React.memo(Footer);