import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from '../css/pages/Login.module.css'
import { FormRow } from '../components'
import { useAppContext } from '../context/AppContext'


const initialValues = {
    companyName: '',
    username: '',
    password: '',
    login: true
}

const Login = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState(initialValues)
    const { loginHandler, token } = useAppContext()

    useEffect(() => {
        if (token) {
            navigate('/', { replace: true })
        }
    }, [navigate, token])

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const toggleLogin = () => {
        setValues({ ...values, login: !values.login })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        let url
        let body
        if (values.login) {
            url = process.env.REACT_APP_API_BASE_URL + '/account/login'
            body = JSON.stringify({
                username: values.username,
                password: values.password
            })
        }
        else {
            url = process.env.REACT_APP_API_BASE_URL + '/account'
            body = JSON.stringify({
                name: values.companyName,
                username: values.username,
                password: values.password
            })
        }
        const options = {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        loginHandler(url, options)
        navigate('/', { replace: true })
    }

    return (
        <div className={classes.loginFormContainer}>
            <h1>{values.login ? 'Login' : 'Register'}</h1>
            <form onSubmit={onSubmit}>
                {!values.login && <FormRow
                    name='companyName'
                    labelText='Company Name'
                    type='text'
                    value={values.companyName}
                    handleChange={handleChange}
                />}
                <FormRow
                    name='username'
                    labelText='Username'
                    type='text'
                    value={values.username}
                    handleChange={handleChange}
                />
                <FormRow
                    name='password'
                    labelText='Password'
                    type='password'
                    value={values.password}
                    handleChange={handleChange}
                />
                <button className='btn'>{values.login ? 'Login' : 'Regsiter'}</button>
                <p
                    onClick={toggleLogin}
                    className={classes.toggleLogin}
                >
                    {values.login ? 'Click here to create an account' : 'Already have an account? Click here to login'}
                </p>
            </form>
        </div>
    )
}

export default Login