import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([])
  // products is variable and 
  // setProducts is function it name may be different
  useEffect(() => {//sideeffect that seen when page is loading in local
    // alert('Hello it is use effect')
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => { //res is name it may be any
        console.log(res.data)
        setProducts(res.data)
      })
      .catch(err => console.log(err))
  }, []) // empty array is passed. it dont load when state is changed
  return (
    <>
      <div className="contaner_fluid">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <Card />
        </div>
      </div>
      {/* {products.map(item=>{
        return(
          <>
          <h1>{item.title}</h1>
          <h2>${item.price}</h2>
          </>
        )
      })} */}
    </>
  )
}

export default Products