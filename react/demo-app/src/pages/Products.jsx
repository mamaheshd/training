import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'

const Products = () => {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(12)
  const [loading, setLoading] = useState(true)
  // products is variable and 
  // setProducts is function it name may be different
  // useEffect(() => {//sideeffect that seen when page is loading in local

  //   // alert('Hello it is use effect')
  //   axios.get(`https://fakestoreapi.com/products`)
  //     .then(res => { //res is name it may be any
  //       console.log(res.data)
  //       setProducts(res.data)
  //     })
  //     .catch(err => console.log(err))
  // }, []) // empty array is passed. it dont load when state is changed
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`)
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)
      }
      catch (err) {
        console.log(err)
      }
    }
    // simulate 2 second delay before fetching data
    const delay = setTimeout(() => {
      fetchProducts()
      clearTimeout(delay)
    }, 2000)
  }, [])

  return (
    // <>
    //   <div className="contaner_fluid">
    //     <div className="row row-cols-1 row-cols-md-4 g-4">
    //       {products.slice(0, limit).map((item, i) => (
    //         <Card data={item} key={i} /> //data is props
    //       ))}
    //     </div>
    //     <div className="d-flex justify-content-center my-3">
    //       {limit < products.length &&
    //         <button className='btn btn-warning' onClick={() => setLimit(limit + 4)
    //         }>Load more</button>
    //       } &nbsp;
    //       {limit > 12 &&
    //         <button className='btn btn-warning' onClick={() => setLimit(limit - 4)
    //         }>Show less</button>
    //       }
    //     </div>
    //   </div>
    //   {/* {products.map(item=>{
    //     return(
    //       <>
    //       <h1>{item.title}</h1>
    //       <h2>${item.price}</h2>
    //       </>
    //     )
    //   })} */}
    // </>
    <>
      {loading ? (
        <div className='d-flex justify-content-center align-item-center' style={{ height: '50vh' }}>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      ) : (
        <div className="contaner_fluid">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {products.slice(0, limit).map((item, i) => (
              <Card data={item} key={i} /> //data is props
            ))}
          </div>
          <div className="d-flex justify-content-center my-3">
            {limit < products.length &&
              <button className='btn btn-warning' onClick={() => setLimit(limit + 4)
              }>Load more</button>
            } &nbsp;
            {limit > 12 &&
              <button className='btn btn-warning' onClick={() => setLimit(limit - 4)
              }>Show less</button>
            }
          </div>
        </div>
      )}
    </>
  )
}

export default Products