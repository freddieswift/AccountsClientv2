import React from 'react'
import classes from '../css/components/Alert.module.css'
import { useAppContext } from '../context/AppContext'

const Alert = () => {
    const { alertMessage, alertType } = useAppContext()
    return (
        <div
            className={classes.errorModal}
        >
            {alertMessage}
        </div>
    )
}

export default Alert