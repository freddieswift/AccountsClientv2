import React from 'react'
import classes from '../css/components/CategoryContainer.module.css'
import { CategoryCard } from '../components'
import { Scrollbars } from 'react-custom-scrollbars';
import { useAppContext } from '../context/AppContext';

const CategoryContainer = ({ name, title }) => {

    const { selectedYearInfo } = useAppContext()

    const categoryCards = selectedYearInfo.categories.map(category => {

    })

    return (
        <div className={classes.categoryContainer}>
            <h3>{title}</h3>
            <Scrollbars autoHide>
                <div className={classes.categoryCardScroll}>
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                </div>
            </Scrollbars>
        </div>
    )
}

export default CategoryContainer