import React from 'react';
import logoImg from '../../assets/images/GPSUS.svg';
import './styles.css';
import NotificationsNone from '@material-ui/icons/NotificationsNone';
import ExitToApp from '@material-ui/icons/ExitToApp';
import RegisterInput from '../../components/Register/RegisterInput';
import RegisterSelect from '../../components/Register/RegisterSelect';
import RadioInput from '../../components/RadioInput/RadioInput';

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

            <RadioInput 
              title="É Hipertenso (a)?"
              name="comorbidity1"
            />

            <RadioInput 
              title="É Diabético (a)?"
              name="comorbidity2"
            />

            <RadioInput 
              title="Usa anticoagulante?"
              name="comorbidity3"
            >
              <p>Varfarina (Marevan), Apixaban (Eliquis), Rivaroxaban (Xarelto), Dabigatran (Pradaxa), Edoxaban (Lixiana)</p>
            </RadioInput>

            <RadioInput 
              title="Tem arritmia (ex: fibrilação atrial)?"
              name="comorbidity4"
            />

            <RadioInput 
              title="Histórico de AVC prévio?"
              name="comorbidity5"
            />

            <RadioInput 
              title="Faz uso de drogas recreativas? Qual?"
              name="comorbidity6"
            >
              <p>Cocaína, anfetaminas e maconha.</p>
            </RadioInput>

            <RadioInput 
              title="Histórico de epilepsia?"
              name="comorbidity7"
            />

          </fieldset>
        </form>
      
        {/* <form className="avc-box"></form> */}

        <form className="trombolise-box">
          <fieldset>
            <legend>Não recomendado para trombólise</legend>

            <RadioInput 
              title="AVC isquêmico ou TCE grave nos últimos 3 meses;"
              name="trombolise1"
            />

            <RadioInput 
              title="AVC hemorrágico, malformação arteriovenosa, neoplasia intracraniana prévia;"
              name="trombolise2"
            />

            <RadioInput 
              title="Suspeita de dussecção aórtica ou endocardite bacteriana atual;"
              name="trombolise3"
            />

            <RadioInput 
              title="Cirurgia de grande porte ou procedimento invasivo nas últimas 2 semanas;"
              name="trombolise4"
            />

            <RadioInput 
              title="Hemorragia do trato gastrointestinal ou geniturinário nas últimas 3 semanas;"
              name="trombolise5"
            />

            <RadioInput 
              title="Hipoglicemia < 50 mg/dl, com melhora completa dos sintomas após correção;"
              name="trombolise6"
            />
          </fieldset>
        </form>
      </main>

    </div>
  );
}