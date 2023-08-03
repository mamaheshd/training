import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import StudentForm from './StudentForm'

const Student = () => {
    const data=useSelector(store=>store.student)
    return (
        <>
            <h1 className='text-success'>
                The name of the student is {data.name}.
            </h1>
            <StudentForm/>
        </>
    )
}

export default Student