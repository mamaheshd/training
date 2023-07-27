import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const params = useParams()
    const id = params.productId
    // const local = () => {
    //     localStorage.setItem('item', JSON.stringify({ product }))
    // }
    useEffect(() => {
        axios.get(`http://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [id])
    // add to cart functuinality
    const addToCart = () => {
        // fetch data frim the localStorage if exit otherwise assign empty array
        const cartItems = JSON.parse(localStorage.getItem('cart')) || []
        const productData = {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            image: product.image,
            quantity: 1
        }
        const existingItem = cartItems.find(item => item.id === product.id)
        if (existingItem) {
            toast.error('product is already in the cart')
        }
        else {
            cartItems.push(productData)
            localStorage.setItem('cart', JSON.stringify(cartItems))
            toast.success(`${product.title} is added to cart`)
        }
    }
    return (
        <>
            <ToastContainer them='colored' position='top-center' />
            <div className="container my-5">
                <div className="roe d-flex justify-content-evenly align-items-center">
                    <div className="col-md-4">
                        <img src={product.image} alt={product.title} width='400' />
                    </div>
                    <div className="col-md-6">
                        <h1>{product.title}</h1>
                        <h2>${product.price}</h2>
                        <p>Category:{product.category}</p>
                        <p>{product.description}</p>
                        <h4>{product.rating && product.rating.rate}({product.rating && product.rating.count})</h4>
                        <div className="my-2">
                            <button className='btn btn-warning' onClick={addToCart}
                            // onClick={local}
                            > Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails