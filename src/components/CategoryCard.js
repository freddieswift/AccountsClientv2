import React from 'react'
import classes from '../css/components/CategoryCard.module.css'

const CategoryCard = ({ name, value }) => {
    return (
        <div className={classes.categoryCard}>
            <p>{name}</p>
            <p>{value}</p>
        </div>
    )
}

export default CategoryCard