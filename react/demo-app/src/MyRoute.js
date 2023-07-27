import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import First from './First'
// import { Second } from './Second'
// import Display from './Display'
import Layouts from './components/Layouts'
import Homepage from './pages/Homepage'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Post from './pages/Post'
import Cart from './pages/Cart'


const MyRoute = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path='/' element={<First/>}/>
                <Route path='/test' element={<Second/>}/>
                <Route path='/try' element={<Display/>}/> */}
                <Route path='/' element={<Layouts />}>
                    <Route index element={<Homepage />} />
                    <Route path='products' element={<Products />} />
                    <Route path='productdetails/:productId' element={<ProductDetails />} />
                    <Route path='cart' element={<Cart/>} />
                    <Route path='post' element={<Post />} />
                </Route>
            </Routes>
        </Router>

    )
}

export default MyRoute