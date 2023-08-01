import React, { useContext } from 'react'
import { GlobalContext } from './Global'
const ComD = () => {
    const data = useContext(GlobalContext)
    return (
        <>
            <h2>The name of the student is  {data.fName} {data.lName}.
            </h2>
            <h2>He lives in {data.address}.</h2>
        </>
    )
}

export default ComD