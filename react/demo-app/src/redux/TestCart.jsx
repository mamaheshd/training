import React from 'react'
import { useSelector } from 'react-redux'
import TestItems from './TestItems'
import Student from './Student'

const TestCart = () => {
    const data=useSelector(store=>store.cart)
    return (
        <>
            <h1 className="text-sucess">
                The number item in the cart is {data.cartCount}
            </h1>
            <TestItems/>
            <Student/> 
        </>
    )
}

export default TestCart