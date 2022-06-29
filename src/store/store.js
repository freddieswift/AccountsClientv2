import create from "zustand";
import { useNavigate } from 'react-router-dom'

const useStore = create((set, get) => ({
    listOfYears: [],
    selectedYearInfo: {},
    displayAlert: false,
    alertText: '',
    login: true,
    token: localStorage.getItem('token'),
    account: JSON.parse(localStorage.getItem('account')) || null,

    loginHandler: async (username, password) => {
        const url = process.env.REACT_APP_API_BASE_URL + '/account/login'
        const body = JSON.stringify({
            username,
            password
        })
        const options = {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await get().makeRequest(url, options)
        set({ token: response.token, account: response.account })
    },

    getListOfYears: async () => {
        const url = process.env.REACT_APP_API_BASE_URL + '/year'
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': get().token
                }
            })
            if (!response.ok) {
                throw new Error(response.error)
            }
            set({ listofYears: await response.json() })
        }
        catch (error) {
            console.log(error)
        }
    },

    makeRequest: async (url, options) => {
        try {
            const response = await fetch(url, options)
            if (!response.ok) {
                throw new Error(response.error)
            }
            return await response.json()
        }
        catch (error) {
            console.log(error)
        }
    }
}))

// {
//     method: 'GET',
//     headers: {
//         'Authorization': get().token
//     }
// }

// set({ listofYears: await response.json() })

export default useStore