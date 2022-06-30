import React from 'react'
import classes from '../css/components/CategoryCard.module.css'

const CategoryCard = ({ name, value }) => {
    return (
        <div className={classes.categoryCard}>
            <p>Title</p>
            <p>£200</p>
        </div>
    )
}

export default CategoryCard