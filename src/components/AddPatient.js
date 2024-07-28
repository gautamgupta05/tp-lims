import React from 'react';

const AddPatients = () => {

    return (
        
        <div className="main">
            <h1>Patients Entry</h1>
            <div className="row">
                <div className="left">
                    <label for="first">First Name:</label>
                    <input className="" type="text" placeholder="Enter First Name" />
                </div>
                <div className="right">
                    <label for="last">Last Name:</label>
                    <input className="" type="text" placeholder="Enter Last Name" />
                </div>
            </div>
            <div className="row">
                <div className="left">
                    <label for="last"> Age:</label>
                    <input className="" type="text" placeholder="Enter Age" />
                </div>
                
                <div className="right">
                    <label for="last">Mobile no.:</label>
                    <input className="" type="text" placeholder="Enter Mobile" />
                </div>
            </div>
            <div className="row">
                <div className=" right">
                <label for="last">Email:</label>
                    <input className="" type="text" placeholder="Enter Email" />
                </div>
            </div>
            <div className="row">
                <div className="left">
                    <select className="">
                        <option value="">Select Lab Test</option>
                        <option value="test1">Test 1</option>
                        <option value="test2">Test 2</option>
                        <option value="test3">Test 3</option>

                    </select>
                </div>
            </div>
            <div className="row">
                <div className="left">
                    <input className="" type="text" placeholder="Total Amount" />
                </div>
                <div className="right">
                    <input className="" type="text" placeholder="Discount" />
                </div>
            </div>
            <div className="row">
                <div className="left">
                    <input className="" type="text" placeholder="Paid Amount" />
                </div>
                <div className="right">
                    <input className="" type="text" placeholder="Due Amount" />
                </div>
            </div>
            <button className="appButton" type="button">Submit</button>
        </div>

        // <div className="register">
        //     <h1>Patients Entry</h1>
        //     <div className="row">
        //         <div className="left">
        //             <input className="inputBox" type="text" placeholder="Enter First Name" />
        //         </div>
        //         <div className="right">
        //             <input className="inputBox" type="text" placeholder="Enter Last Name" />
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="left">
        //             <input className="inputBox" type="text" placeholder="Enter Age" />
        //         </div>
        //         <div className="right">
        //             <input className="inputBox" type="text" placeholder="Enter Mobile" />
        //         </div>
        //     </div>
        //     <div className="row">

        //         <div className="left">
        //             <input className="inputBox" type="text" placeholder="Enter Email" />
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="right">
        //             <select className="inputBox">
        //                 <option value="">Select Lab Test</option>
        //                 <option value="test1">Test 1</option>
        //                 <option value="test2">Test 2</option>
        //                 <option value="test3">Test 3</option>

        //             </select>
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="left">
        //             <input className="inputBox" type="text" placeholder="Total Amount" />
        //         </div>
        //         <div className="right">
        //             <input className="inputBox" type="text" placeholder="Discount" />
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="left">
        //             <input className="inputBox" type="text" placeholder="Paid Amount" />
        //         </div>
        //         <div className="right">
        //             <input className="inputBox" type="text" placeholder="Due Amount" />
        //         </div>
        //     </div>
        //     <button className="appButton" type="button">Submit</button>
        // </div>

    )
}

export default AddPatients;