import React, { useState } from 'react'
import classes from '../css/components/AddEditCategory.module.css'
import { useAppContext } from '../context/AppContext'

const AddEditCategory = ({ toggleAddEditCategory, categoryType, edit, categoryNameProp, categoryValueProp, categoryID }) => {

    const { addCategory, editCategory, deleteCategory } = useAppContext()

    const [categoryName, setCategoryName] = useState(categoryNameProp || '')
    const [categoryValue, setCategoryValue] = useState(categoryValueProp || 0)

    const categoryNameHandler = (e) => {
        setCategoryName(e.target.value)
    }

    const categoryValueHandler = (e) => {
        setCategoryValue(e.target.value)
    }

    const addCategoryHandler = () => {
        if (categoryName) {
            addCategory({ name: categoryName, categoryType, value: categoryValue })
            toggleAddEditCategory()
        }
    }

    const editCategoryHandler = () => {
        if (categoryName) {
            editCategory({ name: categoryName, categoryType, value: categoryValue, id: categoryID })
            toggleAddEditCategory()
        }
    }

    const deleteCategoryHandler = () => {
        deleteCategory(categoryID)
    }

    return (
        <div className={classes.addCategory}>
            <h3>{edit ? 'Edit' : 'Add'} Category</h3>
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
            {!edit &&
                <div className={`${classes.buttonContainer} ${classes.buttonContainerAdd}`}>
                    <button className='btn' onClick={addCategoryHandler}>Add</button>
                    <button className='btn' onClick={toggleAddEditCategory}>Close</button>
                </div>
            }
            {edit &&
                <div className={classes.buttonContainer}>
                    <button className='btn' onClick={editCategoryHandler}>Save</button>
                    {categoryName !== 'Yarn' && categoryName !== "Dyeing" &&
                        <button className='btn' onClick={deleteCategoryHandler}>Delete</button>
                    }
                    <button className='btn' onClick={toggleAddEditCategory}>Close</button>
                </div>
            }
        </div>
    )
}

export default AddEditCategory