import React from 'react'
import classes from '../css/components/CategoryContainer.module.css'

const CategoryContainer = ({ name, title }) => {
    return (
        <div className={classes.categoryContainer}>
            <h3>{title}</h3>
        </div>
    )
}

export default CategoryContainer