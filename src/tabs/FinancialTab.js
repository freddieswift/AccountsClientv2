import React, { useEffect, useState } from 'react'
import classes from '../css/tabs/FinancialTab.module.css'
import { useAppContext } from '../context/AppContext'
import { YearCard, AddYear } from '../components'

const FinancialTab = () => {
    const { listOfYears, getListOfYears } = useAppContext()

    const [toggleAddYear, setToggleAddYear] = useState(false)

    const toggleAddYearHandler = () => {
        setToggleAddYear(!toggleAddYear)
    }

    useEffect(() => {
        getListOfYears()
    }, [])

    listOfYears.sort((a, b) => {
        return new Date(b.name) - new Date(a.name)
    })

    const yearCards = listOfYears.map(year => {
        return <YearCard
            key={year._id}
            className={classes.yearCard}
            year={year}
        >
            {year.year}
        </YearCard>
    })

    return (
        <div className={classes.financialTab}>
            {toggleAddYear && <AddYear toggleAddYearHandler={toggleAddYearHandler} />}
            <div className={classes.yearCardContainer}>
                {yearCards}
                <button
                    className={`btn ${classes.addYearButton}`}
                    onClick={toggleAddYearHandler}
                >
                    Add Year
                </button>
            </div>
        </div>
    )
}

export default FinancialTab