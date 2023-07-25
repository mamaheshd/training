import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([])
  const [limit,setLimit]=useState(12)
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
          {products.slice(0,limit).map((item, i) => (
            <Card data={item} key={i} /> //data is props
          ))}
        </div>
        <div className="d-flex justify-content-center my-3">
          {limit<products.length&&
          <button className='btn btn-warning' onClick={()=>setLimit(limit+4)
          }>Load more</button>
          } &nbsp
          {limit>12&&
          <button className='btn btn-warning' onClick={()=>setLimit(limit-4)
          }>Show less</button> 
          }
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