import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

//const account = localStorage.getItem('account')
const initialValues = {
    token: localStorage.getItem('token'),
    account: JSON.parse(localStorage.getItem('account')) || null,
    listOfYears: [],
    selectedYearInfo: {}
}

const AppContextProvider = ({ children }) => {
    const [state, setState] = useState(initialValues)

    const loginHandler = async (url, options) => {
        try {
            const response = await fetch(url, options)
            if (response.ok) {
                const responseJSON = await response.json()
                setState({
                    ...state,
                    token: responseJSON.token,
                    account: responseJSON.account
                })
                localStorage.setItem('token', responseJSON.token)
                localStorage.setItem('account', JSON.stringify(responseJSON.account))
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

    const makeRequest = async (requestOptions, url) => {
        try {
            const response = await fetch(url, requestOptions)
            const responseJSON = await response.json()
            if (!response.ok) {
                throw new Error(responseJSON.error)
            }
            return responseJSON
        }
        catch (error) {
            console.log(error)
        }
    }

    const getListOfYears = async () => {
        const url = process.env.REACT_APP_API_BASE_URL + '/year'

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
                listOfYears: responseJSON
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    const addYear = async (yearName) => {
        const url = process.env.REACT_APP_API_BASE_URL + '/year'
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    "name": yearName
                }),
                headers: {
                    'Authorization': state.token,
                    'Content-Type': 'application/json'
                }
            })
            getListOfYears()
        }
        catch (error) {
            console.log(error)
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
        const url = `${process.env.REACT_APP_API_BASE_URL}/year/${state.selectedYearInfo._id}`
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                body: JSON.stringify(selectedYearInfoToUpdate),
                headers: {
                    'Authorization': state.token,
                    'Content-Type': 'application/json'
                }
            })

            const responseJSON = await response.json()

            if (response.ok) {
                setState({
                    ...state,
                    selectedYearInfo: responseJSON
                })
                //getListOfYears()
            }
            else {
                throw new Error(responseJSON.error)
            }
        }
        catch (error) {
            getSelectedYearInfo()
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
            logout, addYear,
            updateInfo,
            getListOfYears,
            saveSelectedYear,
            addCategory
        }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { AppContextProvider, AppContext, useAppContext }