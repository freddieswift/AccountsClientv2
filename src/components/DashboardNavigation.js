import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classes from '../css/components/DashboardNavigation.module.css'
import { useAppContext } from '../context/AppContext'

const DashboardNavigation = () => {
    const location = useLocation()
    const { logout, account } = useAppContext()
    return (
        <nav className={classes.dashboardNavigation}>
            <div className={classes.navigationGroup}>
                <h1>{account.name}</h1>
                <Link
                    to='/'
                    className={`${location.pathname === '/' ? classes.activeLink : ''} ${classes.link}`}>
                    Financial
                </Link>
                <Link
                    to='/socks'
                    className={`${location.pathname === '/socks' ? classes.activeLink : ''} ${classes.link}`}>
                    Socks
                </Link>
            </div>
            <div className={classes.buttonContainer}>
                <button className='btn'>Edit Profile</button>
                <button className='btn' onClick={logout}>Log out</button>
            </div>
        </nav>
    )
}

export default DashboardNavigation