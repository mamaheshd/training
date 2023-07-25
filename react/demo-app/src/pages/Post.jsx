import React, { useState, useEffect } from 'react'
import CardsPost from '../components/CardsPost'
import axios from 'axios'

const Post = () => {
    const [pots, setPots] = useState([])
    const [limit, setLimit] = useState(20)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                console.log(res.data)
                setPots(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <div className="contaner_fluid">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {pots.slice(0, limit).map((item, i) => (
                        <CardsPost data={item} key={i} />
                    ))}
                </div>
                <div className="d-flex justify-content-center my-3">
                    {limit < pots.length &&
                        <button className='btn btn-warning' onClick={() => setLimit(limit + 8)
                        }>Load more</button>
                    } &nbsp;
                    {limit > 20 &&
                        <button className='btn btn-warning' onClick={() => setLimit(limit - 8)
                        }>Show less</button>
                    }
                </div>
            </div>
        </>
    )
}

export default Post