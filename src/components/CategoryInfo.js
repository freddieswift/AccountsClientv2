import React from 'react'
import classes from '../css/components/CategoryInfo.module.css'

const CategoryInfo = ({ name, value }) => {
    return (
        <div className={classes.categoryInfoContainer}>{name}</div>
    )
}

export default CategoryInfo
