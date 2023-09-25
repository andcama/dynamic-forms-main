import React from "react";

const Field = ({field, handleInputChange}) => {
    return (
        <>
            <label htmlFor={field.id}>
                {field.placeholder || field.id}:
                {field.required && <span className='required'>*</span>}
            </label>
            {field.type === 'select' ? (
                <select
                    id={field.id}
                    name={field.id}
                    onChange={(e) => handleInputChange(e, field.id)}
                    required={field.required}
                    aria-label={field.placeholder}
                >
                    <option value="">Select an option</option>
                    {field.options.map((option, optionIndex) => (
                        <option key={optionIndex} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : field.type === "textarea" ? (
                <textarea
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder || field.id}
                    onChange={e => handleInputChange(e, field.id)}
                    required={field.required}
                    rows={4}
                    aria-label={field.placeholder}
                />
            ) : (
                <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder || field.id}
                    onChange={e => handleInputChange(e, field.id)}
                    required={field.required}
                    aria-label={field.placeholder}
                />
            )}
        </>
    )
}

export default Field;