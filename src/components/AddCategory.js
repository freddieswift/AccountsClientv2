import React, { useState } from 'react'
import classes from '../css/components/AddCategory.module.css'
import { useAppContext } from '../context/AppContext'

const AddCategory = ({ toggleAddCategory, categoryType }) => {

    const { addCategory } = useAppContext()

    const [categoryName, setCategoryName] = useState('')

    const categoryNameHandler = (e) => {
        setCategoryName(e.target.value)
    }

    const addCategoryHandler = () => {
        if (categoryName) {
            // updateInfo('selectedYearInfo',
            //     {
            //         ...selectedYearInfo, categories: [
            //             ...selectedYearInfo.categories,
            //             { name: categoryName, categoryType }
            //         ]
            //     }
            // )
            // saveSelectedYear()
            addCategory({ name: categoryName, categoryType })
            toggleAddCategory()
        }
    }

    return (
        <div className={classes.addCategory}>
            <h3>Add Category</h3>
            <input
                value={categoryName}
                onChange={categoryNameHandler}
            />
            <div>
                <button className='btn' onClick={addCategoryHandler}>Add</button>
                <button className='btn' onClick={toggleAddCategory}>Close</button>
            </div>
        </div>
    )
}

export default AddCategory