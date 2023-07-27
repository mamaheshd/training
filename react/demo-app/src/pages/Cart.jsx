import React, { useState, useEffect, Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
    const [products, setProducts] = useState([])
    // load product from the localStorage
    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart'))
        setProducts(cartData)
    }, [])
    return (
        <>
            <ToastContainer theme='colored' position='top-center' />
            <div className="container">
                <div className="row d-flex justify-content-between my-4">
                    {
                        products.length === 0 ?
                            <h1 className='my-5 text-danger text-center'>
                                Your cart is Empty
                            </h1>
                            : (
                                <Fragment>
                                    <h2 className='text-center'>
                                        Your cart Items
                                    </h2>
                                    <div className="col-md-8 shadow">
                                        {products.map((item,i)=>{
                                            <Fragment key={i}>
                                                <hr />
                                                <div className="row d-flex align-items-center">
                                                    <div className="col-2">
                                                        <img src={item.image} alt={item.title} width={'50'} />
                                                    </div>
                                                    <div className="col-3">
                                                        <strong> {item.title} </strong>
                                                    </div>
                                                    <div className="col-2">
                                                        <span className="text-warning">${item.price}</span>
                                                    </div>
                                                    <div className="col-3">
                                                        <button className="btn btn-danger">-</button>
                                                        &nbps;
                                                        <span>{item.quantity}</span>
                                                        &nbps;
                                                        <button className="btn btn-danger">+</button>
                                                    </div>
                                                    <div className="col-1">
                                                        <button className="btn btn-danger"><FaTrash/></button>
                                                    </div>
                                                </div>
                                            </Fragment>
                                        })}
                                    </div>
                                    <div className="col-md-3">

                                    </div>
                                </Fragment>
                            )
                    }
                </div>
            </div>

        </>
    )
}

export default Cart