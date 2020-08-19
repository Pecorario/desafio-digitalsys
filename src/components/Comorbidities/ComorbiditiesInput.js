import React from 'react';
import './styles.css';

export default function ComorbiditiesInput({ title, children }) {
  return (
    <div className="container-comorbidities">
      <div className="comorbidities-title">
        <h2>{title}</h2>
        {children}
      </div>
      

      <div className="comorbidities-inputs">

        <div className="container-comorbidities-inputs">
          <input type="radio" name="sim" />
          <label for="sim">Sim</label>
        </div>

        <div className="container-comorbidities-inputs">
          <input type="radio" name="nao" />
          <label for="nao">Não</label>
        </div>

        <div className="container-comorbidities-inputs">
          <input type="radio" name="nao-sei" />
          <label for="nao-sei">Não sei</label>
        </div>
    
      </div>
    </div>
  );
}