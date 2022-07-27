import React from 'react'
import classes from '../css/components/YearInfoGroup.module.css'
import { useAppContext } from '../context/AppContext'

const YearInfoGroup = ({ name, text, readOnly }) => {
    const { updateInfo, selectedYearInfo } = useAppContext()

    const handleChange = (e) => {
        updateInfo('selectedYearInfo', { ...selectedYearInfo, [name]: e.target.value })
    }

    let value

    if (name === 'grossProfit') {
        value = selectedYearInfo.turnover - selectedYearInfo.totalCOS
    }
    else if (name === 'netProfit') {
        value = selectedYearInfo.turnover - selectedYearInfo.totalCOS - selectedYearInfo.totalOH + selectedYearInfo.totalOI
    }
    else {
        value = selectedYearInfo[name]
    }

    return (
        <div>
            <h3>{text}</h3>
            <input
                name={name}
                type="number"
                value={value}
                onChange={readOnly ? null : handleChange}
                readOnly={readOnly}
            ></input>
        </div>
    )
}

export default YearInfoGroup