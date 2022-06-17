import React from 'react'
import classes from '../css/tabs/TabWrapper.module.css'

const TabWrapper = ({ children }) => {
    return (
        <div className={classes.tabWrapper}>{children}</div>
    )
}

export default TabWrapper