import React, { useState } from 'react'
import classes from '../css/components/AddCategory.module.css'
import { useAppContext } from '../context/AppContext'

const AddCategory = ({ toggleAddCategory, categoryType }) => {

    const { addCategory } = useAppContext()

    const [categoryName, setCategoryName] = useState('')
    const [categoryValue, setCategoryValue] = useState(0)

    const categoryNameHandler = (e) => {
        setCategoryName(e.target.value)
    }

    const categoryValueHandler = (e) => {
        setCategoryValue(e.target.value)
    }

    const addCategoryHandler = () => {
        if (categoryName) {
            addCategory({ name: categoryName, categoryType, value: categoryValue })
            toggleAddCategory()
        }
    }

    return (
        <div className={classes.addCategory}>
            <h3>Add Category</h3>
            <label className={classes.label}>Name</label>
            <input
                className={classes.input}
                value={categoryName}
                onChange={categoryNameHandler}
            />
            <label className={classes.label}>Value</label>
            <input
                className={classes.input}
                value={categoryValue}
                onChange={categoryValueHandler}
                type="number"
            />
            <div className={classes.buttonContainer}>
                <button className='btn' onClick={addCategoryHandler}>Add</button>
                <button className='btn' onClick={toggleAddCategory}>Close</button>
            </div>
        </div>
    )
}

export default AddCategory