import React from 'react';

export default function RegisterSelect({ title, inputFor, placeholderText }) {
  return (
    <div className="container-input" id={inputFor}>
      <label for={inputFor}>{title}</label>
        <select name={inputFor} required>
          <option value="" disabled selected>{placeholderText}</option>
        </select>
    </div>
  );
}