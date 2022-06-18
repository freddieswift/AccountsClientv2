import React from 'react'
import classes from '../css/components/YearCard.module.css'

const YearCard = (props) => {

    const yearNameFormatted = new Date(props.year.name).getFullYear()

    return (
        <div className={classes.yearCard}>
            <h3>{yearNameFormatted}</h3>
            <div className={classes.info}>
                <p>Turnover</p>
                <p>£{props.year.turnover}</p>
            </div>
            <p></p>
        </div>
    )
}

export default YearCard