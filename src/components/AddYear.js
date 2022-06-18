import React, { useState } from 'react'
import classes from '../css/components/AddYear.module.css'
import DatePicker from 'react-datepicker'
import { useAppContext } from '../context/AppContext'
import 'react-datepicker/dist/react-datepicker.css'

const AddYear = (props) => {
    const [selectedYear, setSelectedYear] = useState()

    const { addYear } = useAppContext()

    const onChange = date => {
        setSelectedYear(date)
    }

    const addYearHandler = () => {
        if (!selectedYear) {
            console.log("Please select a year")
        }
        else {
            addYear(selectedYear)
            props.toggleAddYearHandler()
        }
    }

    return (
        <div className={classes.addYear}>
            <h1>Add Year</h1>
            <DatePicker
                selected={selectedYear}
                onChange={onChange}
                showYearPicker
                dateFormat='yyyy'
            />
            <div className={classes.buttonContainer}>
                <button
                    className='btn'
                    onClick={props.toggleAddYearHandler}
                >
                    Close
                </button>
                <button
                    className='btn'
                    onClick={addYearHandler}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default AddYear