import React from 'react'
import classes from '../css/components/TabButtonContainer.module.css'

const TabButtonContainer = (props) => {
    return (
        <div className={classes.tabButtonContainer}>
            {props.children}
        </div>
    )
}

export default TabButtonContainer