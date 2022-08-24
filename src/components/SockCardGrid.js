import React from 'react'
import { SockCard } from '../components'
import classes from '../css/components/SockCardGrid.module.css'
import { useAppContext } from '../context/AppContext'

const SockCardGrid = () => {

    const { listOfSocks } = useAppContext()
    console.log("🚀 ~ file: SockCardGrid.js ~ line 9 ~ SockCardGrid ~ listOfSocks", listOfSocks)

    return (
        <div className={classes.sockCardGrid}>
            {listOfSocks.map(sock => {
                return (
                    <SockCard
                        name={sock.name}
                    />
                )
            })}
        </div>
    )
}

export default SockCardGrid