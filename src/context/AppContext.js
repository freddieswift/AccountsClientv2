import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const account = localStorage.getItem('account')
const initialValues = {
    token: localStorage.getItem('token'),
    account: account ? JSON.parse(account) : null,
    listOfYears: [],
    selectedYearInfo: {}
}

const AppContextProvider = ({ children }) => {
    const [state, setState] = useState(initialValues)

    const login = (token, account) => {
        setState({
            ...state,
            token,
            account
        })
        localStorage.setItem('token', token)
        localStorage.setItem('account', JSON.stringify(account))
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
            const responseJSON = await response.json()
            getListOfYears()
        }
        catch (error) {
            console.log(error)
        }
    }

    return <AppContext.Provider value={{ ...state, login, logout, addYear, updateInfo, getListOfYears }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { AppContextProvider, AppContext, useAppContext }