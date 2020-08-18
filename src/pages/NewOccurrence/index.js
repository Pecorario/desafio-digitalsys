import React from 'react';
import logoImg from '../../assets/images/GPSUS.svg';
import './styles.css';
import NotificationsNone from '@material-ui/icons/NotificationsNone';
import ExitToApp from '@material-ui/icons/ExitToApp';

export default function NewOccurrence() {
  return (
    <div id="page-new-occurrence">
      <header>

        <div className="header-content">
          <img src={logoImg} alt="Logo" />

          <div className="patient-ball">
            <p>RS</p>
          </div>

          <div className="patient">
            <h2>Regina Santos</h2>
            <p>SAO PAULO, SP, BR</p>
          </div>
        </div>

        <div className="header-icons">
          <NotificationsNone style={{ marginRight: "2rem" }} />
          <ExitToApp />
        </div>
        
      </header>

      <div className="navigation-bar">
        <nav>
          <a href="/" >Página inicial</a>
          <a href="/" >Nova ocorrência</a>
          <a href="/" >Histórico</a>
        </nav>

        <div className="navigation-bar-btns">
          <button className="back-btn">Voltar</button>
          <button className="save-btn">Salvar</button>
        </div>
      </div>

    </div>
  );
}