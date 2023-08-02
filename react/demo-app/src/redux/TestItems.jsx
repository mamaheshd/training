import React from 'react'
import { useDispatch } from 'react-redux'

const TestItems = () => {
    const dispatach = useDispatch()

    const add = () => (
        dispatach({type:'ADD_TO_CART'})
    )
    const remove = () => (
        dispatach({type:'REMOVE_FROM_CART'})
    )
    return (
        <>
            <div className="row d-flex justify-content-around">
                <div className="col-md-4">
                    <button className="btn btn-primary" onClick={add} >Add</button>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-danger" onClick={remove}>Remove</button>
                </div>
            </div>
        </>
    )
}

export default TestItems