import React, { useState } from 'react'
import classes from '../css/components/CategoryContainer.module.css'
import { CategoryCard, AddEditCategory } from '../components'
import { Scrollbars } from 'react-custom-scrollbars';
import { useAppContext } from '../context/AppContext';

const CategoryContainer = ({ categoryType, title, saveSelectedYearHandler }) => {

    const { selectedYearInfo } = useAppContext()

    const [toggleAddCategory, setToggleAddCategory] = useState(false)

    const toggleAddCategoryHandler = () => {
        setToggleAddCategory(!toggleAddCategory)
    }

    const filteredCategories = selectedYearInfo.categories.filter(category => {
        return category.categoryType === categoryType
    })

    const categoryCards = filteredCategories.map(category => {
        return <CategoryCard
            key={category._id}
            id={category._id}
            name={category.name}
            value={category.value}
            total={selectedYearInfo[`total${category.categoryType}`]}
            turnover={selectedYearInfo.turnover}
            categoryType={categoryType}
        />
    })

    return (
        <div className={classes.categoryContainer}>
            <h3>{title}</h3>
            <p>Total: £{selectedYearInfo[`total${categoryType}`]}</p>
            <Scrollbars autoHide>
                <div className={classes.categoryCardScroll}>
                    {categoryCards}
                </div>
            </Scrollbars>
            <button
                className={`btn ${classes.addCategoryButton}`}
                onClick={toggleAddCategoryHandler}
            >
                Add
            </button>
            {toggleAddCategory && <AddEditCategory
                toggleAddEditCategory={toggleAddCategoryHandler}
                categoryType={categoryType}
            />}
        </div>
    )
}

export default CategoryContainer