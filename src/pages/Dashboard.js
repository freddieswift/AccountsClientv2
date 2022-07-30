import React from 'react'
import { Outlet } from 'react-router-dom'
import { DashboardNavigation, Alert } from '../components'
import classes from '../css/pages/Dashboard.module.css'
import { useAppContext } from '../context/AppContext'

const Dashboard = () => {
    const { displayAlert } = useAppContext()

    return (
        <div className={classes.dashboard}>
            {displayAlert && <Alert />}
            <DashboardNavigation />
            <Outlet />
        </div>
    )
}

export default Dashboard