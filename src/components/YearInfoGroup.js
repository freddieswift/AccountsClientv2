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
        <div className={classes.yearInfoGroup}>
            <h3>{text}</h3>
            <input
                name={name}
                type="number"
                value={value}
                onChange={readOnly ? null : handleChange}
                readOnly={readOnly}
            />
            {(name === 'grossProfit' || name === 'netProfit') &&
                <input
                    value={name === 'grossProfit' ?
                        (100 - (100 * selectedYearInfo.totalCOS) / selectedYearInfo.turnover).toFixed(2) + '%'
                        :
                        (100 - (100 * (selectedYearInfo.totalOH + selectedYearInfo.totalCOS - selectedYearInfo.totalOI)) / selectedYearInfo.turnover).toFixed(2) + '%'
                    }
                    readOnly={true}
                />
            }
        </div>
    )
}

export default YearInfoGroup