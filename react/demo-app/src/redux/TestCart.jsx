import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

const TestCart = () => {
    const data=useSelector(store=>store)
    return (
        <>
            <h1 className="text-sucess">
                The number item in the cart is {data.cartCount}
            </h1>
        </>
    )
}

export default TestCart