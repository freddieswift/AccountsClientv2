import React, { useEffect, useState } from 'react'
import classes from '../css/tabs/FinancialTab.module.css'
import { useAppContext } from '../context/AppContext'
import { AddYear, YearTable } from '../components'

const FinancialTab = () => {
    const { getListOfYears } = useAppContext()

    const [toggleAddYear, setToggleAddYear] = useState(false)

    const toggleAddYearHandler = () => {
        setToggleAddYear(!toggleAddYear)
    }

    useEffect(() => {
        getListOfYears()
    }, [])

    return (
        <div className={classes.financialTab}>
            {toggleAddYear && <AddYear toggleAddYearHandler={toggleAddYearHandler} />}
            <button
                className={`btn ${classes.addYearButton}`}
                onClick={toggleAddYearHandler}
            >
                Add Year
            </button>
            <YearTable />
        </div>
    )
}

export default FinancialTab