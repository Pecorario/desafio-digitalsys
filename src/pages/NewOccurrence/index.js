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

      <main>
        <p>PÁGINA INICIAL / NOVA OCORRÊNCIA</p>

        <h2>Nova ocorrência</h2>

        <form className="patient-register">
          <fieldset>
            <legend>Cadastro do paciente</legend>

            <label for="name">Nome completo</label>
            <input type="text" id="name" name="name" placeholder="DIGITE O NOME DO PACIENTE" />

            <label for="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" placeholder="DIGITE O CPF DO PACIENTE" />

            <label for="age">Idade</label>
            <input type="text" id="date" name="date" placeholder="DIGITE A IDADE" />

            <label for="weight">Peso</label>
            <input type="text" id="weight" name="weight" placeholder="DIGITE O PESO" />

            <label for="gender">Gênero</label>
            <select id="gender" name="gender" >
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="Outro">Outro</option>
            </select>

            <label for="emercency-contact-name">Nome do contato de emergência</label>
            <input type="text" id="emercency-contact-name" name="emercency-contact-name" placeholder="DIGITE O NOME DO CONTATO" />

            <label for="emercency-contact-telephone">Telefone do contato de emergência</label>
            <input type="number" id="emercency-contact-telephone" name="emercency-contact-telephone" placeholder="DIGITE O TELEFONE" />

            <label for="cep">CEP da ocorrência</label>
            <input type="number" id="cep" name="cep" placeholder="DIGITE O CEP" />

            <label for="adress">Endereço da ocorrência</label>
            <input type="text" id="adress" name="adress" placeholder="NOME DA RUA" />

            <label for="adress-number">Número</label>
            <input type="text" id="adress-number" name="adress-number" placeholder="NÚMERO DA RESIDÊNCIA" />

            <label for="state">Estado</label>
            <select id="state" name="state">
            </select>

            <label for="city">Cidade</label>
            <select id="city" name="city">
            </select>
          </fieldset>
        </form>
        
      </main>

    </div>
  );
}