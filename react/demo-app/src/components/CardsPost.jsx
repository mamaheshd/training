import React from 'react'

const CardsPost = (props) => {
    const{title,body}=props.data
    return (
        <>

                    <div className="col">
                        <div className="card">
                        <h5 className="card-title">{title}</h5>
                            <div className="card-body">
                                <h5 className="card-body">{body.slice(0,200)} ....</h5>
                                <button className='btn btn-success'> View Details</button>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default CardsPost