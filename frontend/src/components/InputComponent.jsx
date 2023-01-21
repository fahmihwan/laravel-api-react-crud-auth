import React from "react";

const InputComponent = ({ title, name, value, handleChange }) => {
    return (
        <div className="form-control w-full max-w-xs">
            <label htmlFor={name} className="label">
                <span className="label-text">{title}</span>
            </label>
            <input
                id={name}
                type="text"
                name={name}
                value={value}
                onChange={handleChange}
                className="input input-bordered w-full max-w-xs mb-3"
            />
        </div>
    );
};

export default InputComponent;
