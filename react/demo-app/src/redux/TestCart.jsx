import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import TestItems from './TestItems'

const TestCart = () => {
    const data=useSelector(store=>store)
    return (
        <>
            <h1 className="text-sucess">
                The number item in the cart is {data.cartCount}
            </h1>
            <TestItems/>
        </>
    )
}

export default TestCart