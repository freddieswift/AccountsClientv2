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
        console.log(field, value)
        setState({
            ...state,
            [field]: value
        })
    }


    return <AppContext.Provider value={{ ...state, login, logout, updateInfo }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { AppContextProvider, AppContext, useAppContext }