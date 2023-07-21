import React from 'react'

const Card = () => {
    return (
        <>
            <div className="contaner_fluid">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="/images/1.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <button className='btn btn-success'> View Details</button>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/2.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <button className='btn btn-success'> View Details</button>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/10.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <button className='btn btn-success'> View Details</button>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/11.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <button className='btn btn-success'> View Details</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card