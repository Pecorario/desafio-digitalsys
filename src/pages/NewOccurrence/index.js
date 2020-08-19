import React from 'react';
import logoImg from '../../assets/images/GPSUS.svg';
import './styles.css';
import NotificationsNone from '@material-ui/icons/NotificationsNone';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AssignmentInd from '@material-ui/icons/AssignmentInd'

import RegisterInput from '../../components/Register/RegisterInput';
import RegisterSelect from '../../components/Register/RegisterSelect';
import RadioInput from '../../components/RadioInput/RadioInput';
import SignInput from '../../components/SignInput/SignInput';

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

        <div className="main-h2">
          <AssignmentInd />
          <h2>Nova ocorrência</h2>
        </div>

        <form className="register-box">
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
        
        <form className="comorbidity-box">
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
      
        <form className="avc-box">
          <fieldset>
            <legend>Sinais e sintomas do AVC</legend>

            <div className="container-radio">
              <div className="radio-title">
                <h2> Acordou com sintomas?</h2>
              </div>

              <div className="radio-inputs">

                <div className="container-radio-inputs">
                  <input type="radio" name="avc1" value="sim" />
                  <label for="sim">Sim</label>
                </div>

                <div className="container-radio-inputs">
                  <input type="radio" name="avc1" value="nao" />
                  <label for="nao">Não</label>
                </div>

                <div className="container-radio-inputs">
                  <input type="radio" name="avc1" value="nao-sei" />
                  <label for="nao-sei">Não sei</label>
                </div>
            
              </div>
            </div>

            <div className="container-radio">
              <div className="radio-title">
                <h2> Que horas iniciaram os sintomas?</h2>
              </div>

              <div className="radio-inputs">

                <div className="container-radio-inputs">
                </div>

                <div className="container-radio-inputs input-model2">
                  <label for="avc2">Hora</label>
                  <input type="text" name="avc2" placeholder="DIGITE A HORA"/>
                </div>

                <div className="container-radio-inputs">
                  <input type="radio" name="avc2" value="nao-sei" />
                  <label for="nao-sei">Não sei</label>
                </div>
              </div>
            </div>

            <div className="container-radio">
              <div className="radio-title">
                <h2> O paciente tem assimetria facial?</h2>
                <p>Solicite: dê um sorriso.</p>
              </div>

              <div className="radio-inputs">

                <div className="container-radio-inputs">
                  <input type="radio" name="avc3" value="sim" />
                  <label for="sim">Sim</label>
                </div>

                <div className="container-radio-inputs">
                  <input type="radio" name="avc3" value="nao" />
                  <label for="nao">Não</label>
                </div>

                <div className="container-radio-inputs">
                </div>
            
              </div>
            </div>
          
            <div className="container-radio">
              <div className="radio-title">
                <h2> O paciente tem fraqueza nos braços?</h2>
                <p>Solicite: levante os braços na altura do ombro.</p>
              </div>

              <div className="radio-inputs">

                <div className="container-radio-inputs">
                  <input type="radio" name="avc4" value="sem-fraqueza" />
                  <div className="label-with-p">
                    <label for="sem-fraqueza">Sem fraqueza</label>
                    <p className="label-p">Mantêm em cima mais de 10 segundos</p>
                  </div>
                </div>

                <div className="container-radio-inputs">
                  <input type="radio" name="avc4" value="leve" />
                  <div className="label-with-p">
                    <label for="leve">Leve</label>
                    <p className="label-p">Cai em menos de 10 segundos</p>
                  </div>
                </div>

                <div className="container-radio-inputs">
                  <input type="radio" name="avc4" value="grave" />
                  <div className="label-with-p">
                    <label for="grave">Grave</label>
                    <p className="label-p">Um ou ambos caem rapidamente</p>
                  </div>
                </div>
            
              </div>
            </div>

            <div className="container-radio">
              <div className="radio-title">
                <h2> O paciente tem alteração da fala?</h2>
                <p>Solicite verbalmente a frase: O Brasil é o país do futebol.</p>
              </div>

              <div className="radio-inputs">

                <div className="container-radio-inputs">
                  <input type="radio" name="avc5" value="sim" />
                  <label for="sim">Sim</label>
                </div>

                <div className="container-radio-inputs">
                  <input type="radio" name="avc5" value="nao" />
                  <label for="nao">Não</label>
                </div>

                <div className="container-radio-inputs">
                </div>
            
              </div>
            </div>

            <div className="container-radio">
              <div className="radio-title">
                <h2> O paciente tem alteração no conteúdo da fala?</h2>
                <p>Mostre 3 objetos e pergunte o nome dos mesmos (Ex: celular, caneta e óculos) </p>
              </div>

              <div className="radio-inputs">

                <div className="container-radio-inputs">
                </div>

                <div className="container-radio-inputs">
                  <input type="radio" name="avc6" value="normal" />
                  <div className="label-with-p">
                    <label for="normal">Normal</label>
                    <p className="label-p">2 ou 3 corretos</p>
                  </div>
                </div>

                <div className="container-radio-inputs">
                  <input type="radio" name="avc6" value="anormal" />
                  <div className="label-with-p">
                    <label for="anormal">Anormal</label>
                    <p className="label-p">0 ou 1 correto</p>
                  </div>
                </div>
            
              </div>
            </div>

            <div className="container-radio">
              <div className="radio-title">
                <h2> O paciente tem dificuldade na compreensão da fala?</h2>
                <p>Solicite verbalmente o seguinte gesto: “Me mostre dois dedos” (não pode ser oferecido dica com mímica pelo examinador)</p>
              </div>

              <div className="radio-inputs">

                <div className="container-radio-inputs">
                </div>

                <div className="container-radio-inputs">
                  <input type="radio" name="avc7" value="normal" />
                  <div className="label-with-p">
                    <label for="normal">Normal</label>
                    <p className="label-p">Paciente mostra 2 dedos</p>
                  </div>
                </div>

                <div className="container-radio-inputs">
                  <input type="radio" name="avc7" value="anormal" />
                  <div className="label-with-p">
                    <label for="anormal">Anormal</label>
                    <p className="label-p">Paciente não entende ou não mostra 2 dedos</p>
                  </div>
                </div>
            
              </div>
            </div>

            <div className="container-radio">
              <div className="radio-title">
                <h2> O paciente apresenta desvio do olhar?</h2>
                <p>Checar se o paciente tem desvio conjugado do olhar para um dos lados.</p>
              </div>

              <div className="radio-inputs">

                <div className="container-radio-inputs">
                  <input type="radio" name="avc8" value="normal" />
                  <label for="normal">Normal</label>
                </div>

                <div className="container-radio-inputs">
                  <input type="radio" name="avc8" value="pref" />
                  <label for="pref">Preferência do olhar</label>
                </div>

                <div className="container-radio-inputs">
                  <input type="radio" name="avc8" value="desvio" />
                  <label for="desvio">Desvio forçado e fixo</label>
                </div>
            
              </div>
            </div>

          </fieldset>
        </form>

        <form className="vital-signs-box">
          <fieldset>
            <legend>Sinais vitais</legend>

            <SignInput
              title="PA"
              placeholderText="DIGITE x DIGITE"
              inputFor="sign1"
              nameLabel="mmHG"
            >
              <p>Não reduzir PA, se abaixo de 220x120mmHg</p>
            </SignInput>

            <SignInput
              title="Glicemia capilar"
              placeholderText="DIGITE"
              inputFor="sign2"
              nameLabel="mg/dL"
            >
              <p>Corrigir se abaixo de 60mg/dL</p>
            </SignInput>

            <SignInput
              title="FC"
              placeholderText="DIGITE"
              inputFor="sign3"
              nameLabel="bpm"
            />

            <SignInput
              title="Sat. O2"
              placeholderText="DIGITE"
              inputFor="sign4"
              nameLabel="%"
            >
              <p>Oxigênio, se, Sat.O2 menor que 92%</p>
            </SignInput>
        

          </fieldset>
        </form>

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