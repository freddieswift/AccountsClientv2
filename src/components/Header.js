import React from 'react'
import { useAppContext } from '../context/AppContext'
import classes from '../css/components/Header.module.css'

const Header = () => {
    const { logout, account } = useAppContext()
    return (
        <header className={classes.header}>
            <h1>{account.name}</h1>
            <div className={classes.headerButtonContainer}>
                <button className='btn'>Edit Profile</button>
                <button className='btn' onClick={logout}>Log out</button>
            </div>
        </header>
    )
}

export default Header