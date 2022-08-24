import React from 'react'
import classes from '../css/components/SockCard.module.css'

const SockCard = ({ name }) => {
    return (
        <div className={classes.sockCard}>
            {name}
        </div>
    )
}

export default SockCard