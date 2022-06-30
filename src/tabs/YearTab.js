import React from 'react'
import { useAppContext } from '../context/AppContext'
import classes from '../css/tabs/YearTab.module.css'
import { YearInfoContainer, CategoryContainer } from '../components'
import 'react-datepicker/dist/react-datepicker.css'

const YearTab = () => {

    const { selectedYearInfo, updateInfo, saveSelectedYear } = useAppContext()

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
                        className={`btn ${classes.addYearButton}`}
                        onClick={saveSelectedYearHandler}
                    >
                        Save
                    </button>
                    <YearInfoContainer />
                    <div className={classes.categoryContainerGrid}>
                        <CategoryContainer
                            title="Cost Of Sale"
                        />
                        <CategoryContainer
                            title="Overheads"
                        />
                        <CategoryContainer
                            title="Income"
                        />
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

export default YearTab