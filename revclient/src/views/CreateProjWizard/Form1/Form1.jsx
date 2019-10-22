import React from 'react';
import { FaArrowRight } from "react-icons/fa";


const Form1 = ({ name, description, handleChanges, setFormPosition, startDate }) => {
    
    return (
        <form onSubmit={() => setFormPosition(2)} className="form-1" >
            <h4>Name</h4>
            <input
                required
                label="Project Name"
                name="name"
                type="text"
                className="name"
                placeholder="Project Name"
                value={name}
                onChange={e => handleChanges(e)}
            />
            <h4>Start Date</h4>
            <input
                required
                name="startDate"
                type="date"
                className="start-date"
                value={startDate}
                onChange={e => handleChanges(e)}
            />
            <h4>Description</h4>
            <textarea
                required
                name="description"
                type="text"
                className="description"
                placeholder="Project Description"
                value={description}
                onChange={e => handleChanges(e)}
            />
            <div className="form-navigation first-step">
                <button className="next-step">Next&nbsp;<FaArrowRight /></button>
            </div>
        </form >
    );
};

export default Form1;
