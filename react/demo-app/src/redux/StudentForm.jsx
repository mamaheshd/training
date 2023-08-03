import React from 'react'

const StudentForm = () => {
    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <lebel htmlFor="name"> Name </lebel>
                     <input type="text" name="name" id="name" className='form-control'/>
                     <button className='btn btn-primary'>Change Name</button>
                </div>
            </div>
        </>
    )
}

export default StudentForm