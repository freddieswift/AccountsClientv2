import React from 'react'
import classes from '../css/components/FormRow.module.css'

const FormRow = ({ name, type, labelText, handleChange, value }) => {
    return (
        <div className={classes.formRow}>
            <label
                className={classes.formLabel}
                htmlFor={name}
            >
                {labelText || name}
            </label>
            <input
                className={classes.formInput}
                name={name}
                type={type}
                onChange={handleChange}
                value={value}
            />
        </div>
    )
}

export default FormRow