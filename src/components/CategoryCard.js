import React, { useState } from 'react'
import classes from '../css/components/CategoryCard.module.css'
import { AddEditCategory } from '../components'

const CategoryCard = ({ name, value, total, id, categoryType, turnover }) => {

    const [toggleEditCategory, setToggleEditCategory] = useState(false)

    const toggleEditCategoryHandler = () => {
        setToggleEditCategory(!toggleEditCategory)
    }

    return (
        <React.Fragment>
            {toggleEditCategory
                &&
                <AddEditCategory
                    categoryNameProp={name}
                    categoryValueProp={value}
                    edit={true}
                    categoryID={id}
                    toggleAddEditCategory={toggleEditCategoryHandler}
                    categoryType={categoryType}
                />
            }
            <div className={classes.categoryCard} onClick={toggleEditCategoryHandler}>

                <p>{name}</p>
                <div className={classes.valueContainer}>
                    <p>{(100 * value) / turnover ? ((100 * value) / turnover).toFixed(2) : 0}%</p>
                    <p>£{value}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CategoryCard