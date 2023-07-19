import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import First from './First'
import { Second } from './Second'
import Display from './Display'
const MyRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<First/>}/>
                <Route path='/test' element={<Second/>}/>
                <Route path='/try' element={<Display/>}/>
            </Routes>
        </Router>

    )
}

export default MyRoute