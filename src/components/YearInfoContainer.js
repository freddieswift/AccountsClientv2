import React from 'react'
import DatePicker from 'react-datepicker'
import { useAppContext } from '../context/AppContext'
import classes from '../css/components/YearInfoContainer.module.css'
import { YearInfoGroup } from '../components'

const YearInfoContainer = () => {

    const { selectedYearInfo, updateInfo } = useAppContext()

    const dateOnChange = date => {
        updateInfo('selectedYearInfo', { ...selectedYearInfo, name: date })
    }

    const activeOnChange = () => {
        updateInfo('selectedYearInfo', { ...selectedYearInfo, active: !selectedYearInfo.active })
    }

    return (
        <div className={classes.yearInfoContainer}>
            <div>
                <h3>Name</h3>
                <DatePicker
                    selected={new Date(selectedYearInfo.name)}
                    onChange={dateOnChange}
                    showYearPicker
                    dateFormat='yyyy'
                />
            </div>
            <YearInfoGroup
                name="turnover"
                text="Turnover"
            />
            <YearInfoGroup
                name="grossProfit"
                text="Gross Profit"
                readOnly={true}
            />
            <YearInfoGroup
                name="netProfit"
                text="Net Profit"
                readOnly={true}
            />
            <YearInfoGroup
                name="predictedDozens"
                text="Predicted Dozens"
            />
            <div>
                <h3>Active</h3>
                <div
                    className={`${classes.circle} ${selectedYearInfo.active ? classes.activeCircle : ''}`}
                    onClick={activeOnChange}
                />
            </div>
        </div>
    )
}

export default YearInfoContainer