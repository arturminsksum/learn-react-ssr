import React from 'react';

export default ({ type = 'text', label, name, value = '', onChange }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input
        className="input"
        type="text"
        value={value}
        placeholder={label}
        name={name}
        onChange={onChange}
      />
    </div>
  </div>
);
