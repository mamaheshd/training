import React from 'react'

const TestItems = () => {
    return (
        <>
            <div className="row d-flex justify-content-around">
            <div className="col-md-4">
                    <button className="btn btn-primary">Add</button>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-danger">Remove</button>
                </div>
            </div>
        </>
    )
}

export default TestItems