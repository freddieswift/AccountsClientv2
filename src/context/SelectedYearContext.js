import React, { useContext, useState } from 'react'

const SelectedYearContext = React.createContext()

const initialValues = {
    listOfYears: [],
    selectedYearInfo: {}
}

const SelectedYearContextProvider = ({ children }) => {
    const [state, setState] = useState(initialValues)

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
                methed: 'GET',
                headers: {
                    'Authorization': state.token
                }
            })
            const responseJSON = await response.json()
            updateInfo('listOfYears', responseJSON)
        }
        catch (error) {
            console.log(error)
        }
    }

    return <SelectedYearContext.Provider value={{ ...state, updateInfo, getListOfYears }}>
        {children}
    </SelectedYearContext.Provider>
}

const useSelectedYearContext = () => {
    return useContext(SelectedYearContext)
}

export { SelectedYearContextProvider, SelectedYearContext, useSelectedYearContext }