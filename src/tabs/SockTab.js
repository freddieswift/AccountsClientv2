import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { TabButtonContainer } from '../components'

const SockTab = () => {
    const { getActiveYear } = useAppContext()

    useEffect(() => {
        getActiveYear()
    }, [])

    return (
        <TabButtonContainer>
            <button className='btn'>
                Add Sock
            </button>
        </TabButtonContainer>
    )
}

export default SockTab