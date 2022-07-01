import React from 'react'
import classes from '../css/components/CategoryContainer.module.css'
import { CategoryCard } from '../components'
import { Scrollbars } from 'react-custom-scrollbars';
import { useAppContext } from '../context/AppContext';

const CategoryContainer = ({ name, title }) => {

    const { selectedYearInfo } = useAppContext()

    const filteredCategories = selectedYearInfo.categories.filter(category => {
        return category.categoryType === name
    })

    const categoryCards = filteredCategories.map(category => {
        return <CategoryCard name={category.name} value={category.value} />
    })

    return (
        <div className={classes.categoryContainer}>
            <h3>{title}</h3>
            <Scrollbars autoHide>
                <div className={classes.categoryCardScroll}>
                    {categoryCards}
                </div>
            </Scrollbars>
            <button className={`btn ${classes.addCategoryButton}`}>
                Add
            </button>
        </div>
    )
}

export default CategoryContainer