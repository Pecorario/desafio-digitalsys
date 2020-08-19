import React from 'react';
import './styles.css';

export default function RegisterInput({ title, inputFor, placeholderText }) {
  return (
    <div className="container-input" id={inputFor}>
      <label for={inputFor}>{title}</label>
      <input type="text" name={inputFor} placeholder={placeholderText} />
    </div>
  );
}