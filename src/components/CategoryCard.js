import React from 'react'
import classes from '../css/components/CategoryCard.module.css'

const CategoryCard = ({ name, value, total }) => {
    return (
        <div className={classes.categoryCard}>
            <p>{name}</p>
            <p>{(100 * value) / total ? ((100 * value) / total).toFixed(2) : 0}%</p>
            <p>£{value}</p>
        </div>
    )
}

export default CategoryCard