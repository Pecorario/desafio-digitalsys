import React from 'react';

export default function SignInput({ title, children, placeholderText, inputFor, nameLabel }) {
  return (
    <div className="container-radio">
      <div className="radio-title">
        <h2>{title}</h2>
        {children}
      </div>

      <div className="radio-inputs">
        <div className="container-radio-inputs input-model2">
          <label for={inputFor}>{nameLabel}</label>
          <input type="text" name={inputFor} placeholder={placeholderText}/>
        </div>
      </div>
    </div>
  );
}