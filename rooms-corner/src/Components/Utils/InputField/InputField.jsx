import React from 'react';

const InputField = ({ label, type = 'text', name, value, onChange }) => (
  <div className="input-field">
    <label htmlFor={name}>{label}</label>
    {type === 'textarea' ? (
      <textarea id={name} name={name} value={value} onChange={onChange} />
    ) : (
      <input type={type} id={name} name={name} value={value} onChange={onChange} />
    )}
  </div>
);

export default InputField;
