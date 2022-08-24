import React from 'react'
import classes from '../css/components/Table.module.css'

const Table = ({ tableHeaders, tableRows }) => {
    return (
        <table className={classes.table}>
            <thead>
                <tr className={classes.tableHeaderRow}>
                    {tableHeaders}
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}

export default Table