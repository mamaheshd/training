import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([])
  // products is variable and 
  // setProducts is function it name may be different
  useEffect(() => {//sideeffect that seen when page is loading in local
    alert('Hello it is use effect')
  })
  return (
    <>
      <Card />
    </>
  )
}

export default Products