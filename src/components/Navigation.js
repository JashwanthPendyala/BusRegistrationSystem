import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className='text-white p-3 d-flex justify-content-around navbar-bg'>
            <Link className='nav-link' to='/'>HOME</Link>
            <Link className='nav-link' to='/login'>LOGIN</Link>
            <Link className='nav-link' to='/home'>CONTACT US</Link>
        </div>
    )
}

export default Navigation