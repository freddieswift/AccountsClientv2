import React from 'react'
import { useAppContext } from '../context/AppContext'
import classes from '../css/tabs/YearTab.module.css'
import { YearInfoContainer, CategoryContainer, TabButtonContainer } from '../components'
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom'

const YearTab = () => {

    const navigate = useNavigate()

    const { selectedYearInfo, saveSelectedYear, deleteSelectedYear, displayAlertHandler } = useAppContext()

    const saveSelectedYearHandler = () => {
        saveSelectedYear()
    }

    const deleteSelectedYearHandler = async () => {
        try {
            await deleteSelectedYear()
            displayAlertHandler("Year deleted", 'success')
            navigate('/', { replace: true })
        }
        catch (error) {
            displayAlertHandler(error.message, 'danger')
        }
    }

    return (
        <div>
            {Object.keys(selectedYearInfo).length === 0 &&
                <h1>Something went wrong</h1>
            }
            {Object.keys(selectedYearInfo).length !== 0 &&
                <React.Fragment>
                    <TabButtonContainer>
                        <button
                            className='btn'
                            onClick={saveSelectedYearHandler}
                        >
                            Save
                        </button>
                        <button
                            className='btn'
                            onClick={deleteSelectedYearHandler}
                        >
                            Delete
                        </button>
                    </TabButtonContainer>
                    <YearInfoContainer />
                    <div className={classes.categoryContainerGrid}>
                        <CategoryContainer
                            saveSelectedYearHandler={saveSelectedYearHandler}
                            title="Cost Of Sale"
                            categoryType="COS"
                        />
                        <CategoryContainer
                            saveSelectedYearHandler={saveSelectedYearHandler}
                            title="Overheads"
                            categoryType="OH"
                        />
                        <CategoryContainer
                            saveSelectedYearHandler={saveSelectedYearHandler}
                            title="Income"
                            categoryType="OI"
                        />
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

export default YearTab