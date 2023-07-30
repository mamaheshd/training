import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ColorRing } from 'react-router-dom'

const CartContainer = () => {
    const [products, setProduct]=useState([])
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        const fetchProduct=async()=>{
            try{
                const response= await axios.get(`https://fakestoreapi.com/products`)
                console.log(response.data)
                setProduct(response.data)
                setLoading(false)
            }
            catch{
                console.log(err)
            }
        }
    })
  return (
    <>
    
    </>
  )
}

export default CartContainer