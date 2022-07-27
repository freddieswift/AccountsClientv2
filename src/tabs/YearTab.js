import React from 'react'
import { useAppContext } from '../context/AppContext'
import classes from '../css/tabs/YearTab.module.css'
import { YearInfoContainer, CategoryContainer } from '../components'
import 'react-datepicker/dist/react-datepicker.css'

const YearTab = () => {

    const { selectedYearInfo, saveSelectedYear } = useAppContext()

    const saveSelectedYearHandler = () => {
        saveSelectedYear()
    }

    return (
        <div>
            {Object.keys(selectedYearInfo).length === 0 &&
                <h1>Something went wrong</h1>
            }
            {Object.keys(selectedYearInfo).length !== 0 &&
                <React.Fragment>
                    <button
                        className='btn'
                        onClick={saveSelectedYearHandler}
                    >
                        Save
                    </button>
                    <YearInfoContainer />
                    <div className={classes.categoryContainerGrid}>
                        <CategoryContainer
                            saveSelectedYearHandler={saveSelectedYearHandler}
                            title="Cost Of Sale"
                            categoryType="COS"
                        />
                        <CategoryContainer
                            saveSelectedYearHandler={saveSelectedYearHandler}
                            title="Overheads"
                            categoryType="OH"
                        />
                        <CategoryContainer
                            saveSelectedYearHandler={saveSelectedYearHandler}
                            title="Income"
                            categoryType="OI"
                        />
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

export default YearTab