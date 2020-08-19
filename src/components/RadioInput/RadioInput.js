import React from 'react';
import './styles.css';

export default function RadioInput({ title, children, name }) {
  return (
    <div className="container-radio">
      <div className="radio-title">
        <h2>{title}</h2>
        {children}
      </div>
      

      <div className="radio-inputs">

        <div className="container-radio-inputs">
          <input type="radio" name={name} value="sim" />
          <label for="sim">Sim</label>
        </div>

        <div className="container-radio-inputs">
          <input type="radio" name={name} value="nao" />
          <label for="nao">Não</label>
        </div>

        <div className="container-radio-inputs">
          <input type="radio" name={name} value="nao-sei" />
          <label for="nao-sei">Não sei</label>
        </div>
    
      </div>
    </div>
  );
}