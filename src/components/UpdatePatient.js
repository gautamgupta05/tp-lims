import React from 'react';

const UpdatePatients = () => {
       return (
        <div className="course">
            <h1>Update Patients</h1>

            <input type='text' className="inputBox" placeholder='Enter Patient Name' />
            <input type='text' className="inputBox" placeholder='Enter Patient Price' />
            <input type='text' className="inputBox" laceholder='Enter Patient Category' />
            <input type='text' className="inputBox" placeholder='Enter Patient Dr.' />

            <button className="appButton" type="button" >Update Patient</button>
        </div>
    )
}

export default UpdatePatients;