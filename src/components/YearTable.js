import React from 'react'
import classes from '../css/components/YearTable.module.css'
import { useAppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const YearTable = () => {

    const { listOfYears, updateInfo } = useAppContext()
    const navigate = useNavigate()

    listOfYears.sort((a, b) => {
        return new Date(b.name) - new Date(a.name)
    })

    const onClick = (e) => {
        const selectedYearList = listOfYears.filter(year => {
            return year._id === e.target.parentElement.id
        })
        updateInfo('selectedYearInfo', selectedYearList[0])
        navigate('/year')
    }

    const listOfYearsTableRows = listOfYears.map(year => {
        return (
            <tr key={year._id} id={year._id} className={classes.yearTableRow} onClick={onClick}>
                <td>{new Date(year.name).getFullYear()}</td>
                <td>£{year.turnover}</td>
                <td>£{year.totalCOS}</td>
                <td>£{year.totalOH}</td>
                <td>£{year.totalOI}</td>
                <td className={classes.activeTableData}>
                    <div className={`${classes.circle} ${year.active ? classes.activeCircle : ''}`} />
                </td>
            </tr>
        )
    })

    return (
        <table className={classes.yearTable}>
            <thead>
                <tr className={classes.yearTableHeaderRow}>
                    <th>Name</th>
                    <th>Turnover</th>
                    <th>Cost of Sales</th>
                    <th>Overheads</th>
                    <th>Income</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {listOfYearsTableRows}
            </tbody>
        </table>
    )
}

export default YearTable