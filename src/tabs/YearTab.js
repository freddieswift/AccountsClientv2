import React from 'react'
import { useAppContext } from '../context/AppContext'
import classes from '../css/tabs/YearTab.module.css'
import { YearInfoContainer } from '../components'
import 'react-datepicker/dist/react-datepicker.css'

const YearTab = () => {

    const { selectedYearInfo, updateInfo, saveSelectedYear } = useAppContext()



    const saveSelectedYearHandler = () => {
        saveSelectedYear()
    }

    return (
        <div className={classes.yearTab}>
            <button
                className={`btn ${classes.addYearButton}`}
                onClick={saveSelectedYearHandler}
            >
                Save
            </button>
            {Object.keys(selectedYearInfo).length !== 0 &&
                <YearInfoContainer />
            }
            {Object.keys(selectedYearInfo).length === 0 &&
                <h1>Something went wrong</h1>
            }
        </div>
    )
}

export default YearTab