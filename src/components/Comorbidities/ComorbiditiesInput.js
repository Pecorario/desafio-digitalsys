import React from 'react';
import './styles.css';

export default function ComorbiditiesInput({ title, inputFor, placeholderText }) {
  return (
    <div className="container-comorbities" id={inputFor}>
      <label for={inputFor}>{title}</label>
      <input type="text" name={inputFor} placeholder={placeholderText} />
    </div>
  );
}