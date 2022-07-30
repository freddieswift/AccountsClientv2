import React from 'react'
import classes from '../css/components/Alert.module.css'
import { useAppContext } from '../context/AppContext'

const Alert = () => {
    const { alertMessage, alertType } = useAppContext()
    console.log(alertType)
    return (
        <div
            className={`${classes.alert} ${classes['alert-' + alertType]}`}
        >
            {alertMessage}
        </div>
    )
}

export default Alert