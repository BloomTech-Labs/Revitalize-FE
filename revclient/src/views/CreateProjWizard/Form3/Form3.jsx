import React, { useState } from 'react';
import  { FaArrowLeft } from "react-icons/fa";

import Droppy from "../../../components/PhotoUpload/Droppy";


const Form3 = ({difficulty, duration, goalAmount, amountFunded, handleChanges, submitForm, setFormPosition }) => {

    const [err, setErr] = useState(true)
    console.log(err)

    const checker = (e) => {
        e.target.value.split('.').map(each => {
            if (isNaN(each)) {
                return setErr(false)
            } else {
                return setErr(true)
            }
        })
    }

    return (
        <form onSubmit={(event) => submitForm(event)} className="form-3" >
            <h2>Project Duration</h2>
            <input
                required
                label="Project Name"
                name="duration"
                type="text"
                className="duration"
                placeholder="(Amount of Months)"
                value={duration}
                onChange={e => handleChanges(e)}
            />
            <h2>Goal Budget</h2>
            <input
                required
                min='0'
                step='0.10'
                name="goalAmount"
                type="number"
                className="proj-budget"
                value={goalAmount === 0 ? '' : goalAmount}
                onChange={e => {handleChanges(e); checker(e)}}
            />
            {!err && <p className='errorText'>Please make sure to enter a correct price</p>}
            <h2>Project Difficulty Level</h2>
            <select
                required
                name="difficulty"
                onChange={e => handleChanges(e)}
            >
                <option >Select Difficulty</option>
                <option >Easy</option>
                <option >Medium</option>
                <option >Hard</option>

            </select>
            <Droppy />
            <div className="form-navigation">
                <button className="prev-step" onClick={() => setFormPosition(2)}><FaArrowLeft />&nbsp;Previous</button>
                <button className="next-step submit" type="submit">Submit</button>
            </div>
        </form >
    );
};

export default Form3;
