import react, { useState } from 'react'
import './styles.css'
import { InputMine, InputRadio, ButtonPage, ButtonConfirm } from '../../components'
export const UserPlan = react.memo(()=>{
    const [date, setDate] = useState(new Date)
    const [NameUser, setNameUser] = useState<string>()
    const [PlanName, setPlanName] = useState<string>()
    const [StartDatePlan, setStartDatePlan] = useState<string>()
    const [EndDatePlan, setEndDatePlan] = useState<string>()
    const [RegisterDate, setRegisterDate] = useState<string>()



    return(
        <div className="container-userplan formalign">
                <div className="form">
                    <div className="container-type-person">
                        <div className="divradio">
                            <label>Pessoa Fisica</label>
                            <InputRadio name="typeuser" id="pf" value="´pf" />
                        </div>
                        <div>
                            <label>Pessoa Juridica</label>
                            <InputRadio name="typeuser" id="pj" value="pj" />
                        </div>
                    </div>
                    <div className="contentinputs">
                        <InputMine placeholder="Nome do Plano" maxLength={100} value={PlanName} setValue={setPlanName}/>
                        <InputMine placeholder="Nome do recebidor" maxLength={100} value={NameUser} setValue={setNameUser}/>
                    </div>
                    <div className="contentinputs">
                        <InputMine placeholder="D. Inicial Vigência: DD/MM/YY" maxLength={10} value={StartDatePlan} setValue={setStartDatePlan}/>
                        <InputMine placeholder="D. Final Vigência: DD/MM/YY" maxLength={10} value={EndDatePlan} setValue={setEndDatePlan}/>
                    </div>
                    
                    <div className="contentinputs informationData">
                        <h4>Data de cadastro:</h4>
                        <label style={{ paddingLeft: "1%", color: "#dd2c00" }}>{date.toLocaleDateString("pt-BR")}</label>
                    </div>
                </div>
                <div className="contButton">
                    <ButtonPage path="/listuserplan" wherego="Listagem"/>
                    <ButtonPage path="/user" wherego="Usuario"/>
                    {/* <ButtonConfirm /> */}
                </div>
            </div>
    )
})