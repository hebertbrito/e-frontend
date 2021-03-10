import react, { useState } from 'react'
import './styles.css'
import { InputMine, InputRadio, ButtonConfirm, ButtonPage } from '../../components'
export const User = react.memo(()=>{
    const [date, setDate] = useState(new Date)
    const [Name, setName] = useState<string>()
    const [CPF, setCPF] = useState<string>()
    const [CNPJ, setCNPJ] = useState<string>()
    const [RG, setRG] = useState<string>()
    const [DateBirth, setDateBirth] = useState<string>()
    const [TypeUser, setTypeUser] = useState<string>()
    const [Email, setEmail] = useState<string>()
    const [Telephone, setTelephone] = useState<string>()
    const [RegisterDate, setRegisterDate] = useState<string>()
    const data = async function (){

    }

    return(
        <div className="container-userplan formalign">
                <div className="form">
                    <div className="container-type-person">
                        <div className="divradio">
                            <label>Pessoa Fisica</label>
                            <InputRadio name="typeuser" id="pf" value="´pf"/>
                        </div>
                        <div>
                            <label>Pessoa Juridica</label>
                            <InputRadio name="typeuser" id="pj" value="pj" />
                        </div>
                    </div>
                    <div className="contentinputs">
                        <InputMine placeholder="Nome" value={Name} setValue={setName}/>
                        <InputMine placeholder="CPF" type="text" maxLength={11} value={CPF} setValue={setCPF}/>
                        <InputMine placeholder="CNPJ" value={CNPJ} setValue={setCNPJ}/>
                    </div>
                    <div className="contentinputs">
                        <InputMine placeholder="RG" type="text" maxLength={11} value={RG} setValue={setRG}/>
                        <InputMine placeholder="Data Nasc: DD/MM/YYYY" maxLength={10} type="text" value={DateBirth} setValue={setDateBirth}/>
                    </div>
                    <div className="contentinputs">
                        <InputMine placeholder="Telefone: (xx)xxxxxxxx" type="text" value={Telephone} setValue={setTelephone}/>
                        <InputMine placeholder="Email" type="email" value={Email} setValue={setEmail} maxLength={60}/>
                    </div>
                    <div className="contentinputs informationData">
                        <h4>Data de cadastro:</h4>
                        <label style={{ paddingLeft: "1%", color: "#dd2c00" }}>{date.toLocaleDateString("pt-BR")}</label>
                    </div>
                </div>
                <div className="contButton">
                    <ButtonPage path="/listuserplan" wherego="Listagem"/>
                    <ButtonPage path="/" wherego="Plano"/>
                    {/* <ButtonConfirm onPress={()=> this.data}/> */}
                </div>
            </div>
    )
})