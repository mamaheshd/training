import React, { useContext } from 'react'
import { GlobalContext } from './Global'
const ComD = () => {
    const data = useContext(GlobalContext)
    return (
        <>
            <h2>The technology we are learning is  {data}

            </h2>
        </>
    )
}

export default ComD