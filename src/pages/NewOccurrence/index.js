import React from 'react';
import logoImg from '../../assets/images/GPSUS.svg';
import './styles.css';
import NotificationsNone from '@material-ui/icons/NotificationsNone';
import ExitToApp from '@material-ui/icons/ExitToApp';
import RegisterInput from '../../components/Register/RegisterInput';
import RegisterSelect from '../../components/Register/RegisterSelect';
import ComorbiditiesInput from '../../components/Comorbidities/ComorbiditiesInput';

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

            <div className="register-line">
              <RegisterInput title="Nome completo"
              inputFor="name"
              placeholderText="DIGITE O NOME DO PACIENTE"
            />
            </div>          

            <div className="register-line">
              <RegisterInput title="CPF"
                inputFor="cpf"
                placeholderText="DIGITE O CPF DO PACIENTE"
              />

              <RegisterInput title="Idade"
                inputFor="age"
                placeholderText="DIGITE A IDADE"
              />

              <RegisterInput title="Peso"
                inputFor="weight"
                placeholderText="DIGITE O PESO"
              />

              <RegisterSelect title="Gênero"
                inputFor="gender"
                placeholderText="SELECIONE O GÊNERO"
              />
            </div>

            <div className="register-line">
              <RegisterInput title="Nome do contato de emergência"
                inputFor="emergency-contact-name"
                placeholderText="DIGITE O NOME DO CONTATO"
              />

              <RegisterInput title="Telefone do contato de emergência"
                inputFor="emergency-contact-telephone"
                placeholderText="DIGITE O TELEFONE"
              />
            </div>

            <div className="register-line">
              <RegisterInput title="CEP da ocorrência"
                inputFor="cep"
                placeholderText="DIGITE O CEP"
              />

              <RegisterInput title="Endereço da ocorrência"
                inputFor="adress"
                placeholderText="NOME DA RUA"
              />

              <RegisterInput title="Número"
                inputFor="adress-number"
                placeholderText="NÚMERO DA RUA"
              />
            </div>

            <div className="register-line">
              <RegisterSelect title="Estado"
                inputFor="state"
                placeholderText="SELECIONE O ESTADO"
              />

              <RegisterSelect title="Cidade"
                inputFor="city"
                placeholderText="SELECIONE A CIDADE"
              />
            </div>

          </fieldset>
        </form>
        
        <form className="comorbidity">
          <fieldset>
            <legend>Comorbidades relevantes</legend>

            <ComorbiditiesInput 
              title="É Hipertenso (a)?"
            />

            <ComorbiditiesInput 
              title="É Diabético (a)?"
            />

            <ComorbiditiesInput 
              title="Usa anticoagulante?"
            >
              <p>Varfarina (Marevan), Apixaban (Eliquis), Rivaroxaban (Xarelto), Dabigatran (Pradaxa), Edoxaban (Lixiana)</p>
            </ComorbiditiesInput>

            <ComorbiditiesInput 
              title="Tem arritmia (ex: fibrilação atrial)?"
            />

            <ComorbiditiesInput 
              title="Histórico de AVC prévio?"
            />

            <ComorbiditiesInput 
              title="Faz uso de drogas recreativas? Qual?"
            >
              <p>Cocaína, anfetaminas e maconha.</p>
            </ComorbiditiesInput>

            <ComorbiditiesInput 
              title="Histórico de epilepsia?"
            />

          </fieldset>
        </form>
      </main>

    </div>
  );
}