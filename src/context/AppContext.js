import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

//const account = localStorage.getItem('account')
const initialValues = {
    token: localStorage.getItem('token'),
    account: JSON.parse(localStorage.getItem('account')) || null,
    listOfYears: [],
    selectedYearInfo: {},
    displayAlert: false,
    alertType: '',
    alertMessage: ''
}

const AppContextProvider = ({ children }) => {
    const [state, setState] = useState(initialValues)

    const loginHandler = async (url, options) => {
        try {
            const response = await fetch(url, options)
            const responseJSON = await response.json()
            if (response.ok) {
                setState({
                    ...state,
                    token: responseJSON.token,
                    account: responseJSON.account
                })
                localStorage.setItem('token', responseJSON.token)
                localStorage.setItem('account', JSON.stringify(responseJSON.account))
            }
            else {
                throw new Error(responseJSON.error)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        setState({
            ...state,
            token: '',
            account: {}
        })
        localStorage.removeItem('token')
        localStorage.removeItem('account')
    }

    const updateInfo = (field, value) => {
        setState({
            ...state,
            [field]: value
        })
    }

    const displayAlertHandler = (alertMessage, alertType) => {
        setState({
            ...state,
            alertMessage,
            alertType,
            displayAlert: true
        })
        hideAlertHandler()
    }

    const hideAlertHandler = () => {
        return setTimeout(() => {
            setState({
                ...state,
                alertText: '',
                alertType: ''
            })
        }, 3000)

    }

    const authFetch = async (endpoint, config) => {
        const url = process.env.REACT_APP_API_BASE_URL + endpoint
        config.headers = {
            ...config.headers,
            'Authorization': state.token
        }
        const response = await fetch(url, config)
        const responseJSON = await response.json()
        if (!response.ok) {
            throw new Error(responseJSON.error)
        }
        return responseJSON
    }

    const getListOfYears = async () => {
        try {
            const listOfYears = await authFetch('/year', {
                method: 'GET'
            })
            setState({
                ...state,
                listOfYears
            })
        }
        catch (error) {
            displayAlertHandler(error.message, 'danger')
        }
    }

    const addYear = async (yearName) => {
        try {
            await authFetch('/year', {
                method: 'POST',
                body: JSON.stringify({
                    "name": yearName
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            getListOfYears()
        }
        catch (error) {
            displayAlertHandler(error.message, 'danger')
        }
    }

    const addCategory = async (category) => {
        const dataToUpdate = {
            ...state.selectedYearInfo, categories: [
                ...state.selectedYearInfo.categories,
                category
            ]
        }
        saveSelectedYear(dataToUpdate)
    }

    const saveSelectedYear = async (dataToUpdate = state.selectedYearInfo) => {
        const { totalCOS, totalOH, ...selectedYearInfoToUpdate } = dataToUpdate
        try {
            const selectedYearInfo = await authFetch(`/year/${state.selectedYearInfo._id}`, {
                method: 'PATCH',
                body: JSON.stringify(selectedYearInfoToUpdate),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setState({
                ...state,
                selectedYearInfo
            })
            displayAlertHandler("Save Successful", 'success')
        }
        catch (error) {
            displayAlertHandler(error.message, 'danger')
        }
    }

    const getSelectedYearInfo = async () => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/year/${state.selectedYearInfo._id}`
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': state.token
                }
            })
            const responseJSON = await response.json()
            setState({
                ...state,
                selectedYearInfo: responseJSON
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    return <AppContext.Provider value={
        {
            ...state,
            loginHandler,
            logout,
            addYear,
            updateInfo,
            getListOfYears,
            saveSelectedYear,
            addCategory,
            displayAlertHandler
        }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { AppContextProvider, AppContext, useAppContext }