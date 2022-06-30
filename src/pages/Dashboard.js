import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, DashboardNavigation } from '../components'
import classes from '../css/pages/Dashboard.module.css'

const Dashboard = () => {
    return (
        <div className={classes.dashboard}>
            <DashboardNavigation />
            <Outlet />
        </div>
    )
}

export default Dashboard