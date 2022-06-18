import React, { useEffect } from 'react'
import classes from '../css/components/YearList.module.css'
import { useAppContext } from '../context/AppContext'

const YearList = React.memo(() => {
    console.log("render year list")
    const { listOfYears, getListOfYears, isLoading } = useAppContext()

    useEffect(() => {
        getListOfYears()
    }, [])

    let yearCards

    if (isLoading) {
        yearCards = <div>Loading...</div>
    }
    else {
        yearCards = listOfYears.map(year => {
            return <div key={year._id}>{year.year}</div>
        })
    }

    return (
        <div className={classes.yearList}>
            <div>home</div>
            {yearCards}
        </div>
    )
})

export default YearList