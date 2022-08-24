import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { SockCardGrid, TabButtonContainer } from '../components'


const SockTab = () => {
    const { getActiveYear, getSocks } = useAppContext()

    useEffect(() => {
        getActiveYear()
        getSocks()
    }, [])

    return (
        <TabButtonContainer>
            <button className='btn'>
                Add Sock
            </button>
            <SockCardGrid />
        </TabButtonContainer>
    )
}

export default SockTab