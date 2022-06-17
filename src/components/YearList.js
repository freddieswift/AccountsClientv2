import React, { useEffect } from 'react'
import classes from '../css/components/YearList.module.css'
import { useAppContext } from '../context/AppContext'

const YearList = React.memo(() => {
    console.log("render year list")
    const { listOfYears, token, updateInfo } = useAppContext()

    useEffect(() => {
        const getListOfYears = async () => {
            const url = process.env.REACT_APP_API_BASE_URL + '/year'
            try {
                const response = await fetch(url, {
                    methed: 'GET',
                    headers: {
                        'Authorization': token
                    }
                })
                const responseJSON = await response.json()
                updateInfo('listOfYears', responseJSON)
            }
            catch (error) {
                console.log(error)
            }
        }
        getListOfYears()
    }, [])

    const yearCards = listOfYears.map(year => {
        return <div key={year._id}>{year.year}</div>
    })

    return (
        <div className={classes.yearList}>{yearCards}</div>
    )
})

export default YearList