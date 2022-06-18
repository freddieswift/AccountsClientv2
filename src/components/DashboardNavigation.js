import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classes from '../css/components/DashboardNavigation.module.css'

const DashboardNavigation = () => {
    const location = useLocation()
    return (
        <nav className={classes.dashboardNavigation}>
            <Link to='/' className={`${location.pathname === '/' ? classes.activeLink : ''} ${classes.link}`}>Financial</Link>
            <Link to='/socks' className={`${location.pathname === '/socks' ? classes.activeLink : ''} ${classes.link}`}>Socks</Link>
        </nav>
    )
}

export default DashboardNavigation