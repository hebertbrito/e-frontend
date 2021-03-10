import react, { useState, useEffect } from 'react'
import './styles.css'
import { InputMine, InputRadio, ButtonConfirm, ButtonPage } from '../../components'
import { CreateUser } from '../../services/api/CreateUser'

export const User = react.memo(() => {
    const [date, setDate] = useState(new Date)
    const [name, setName] = useState<string>()
    const [cpf, setCPF] = useState<string>()
    const [cnpj, setCNPJ] = useState<string>()
    const [rg, setRG] = useState<string>()
    const [dateBirth, setDateBirth] = useState<string>()
    const [typeUser, setTypeUser] = useState<string>("1")
    const [email, setEmail] = useState<string>()
    const [telephone, setTelephone] = useState<string>()
    const [registerDate, setRegisterDate] = useState(new Date().toLocaleDateString("pt-BR"))


    const data = async function () {
        try {

            if (validatePJ() && validate()) {
                const body = {
                    cpf, rg, cnpj, telephone, email, name, registerDate, typeUser, dateBirth
                }
                await CreateUser(body)
                alert("Usuario Criado com sucesso")
            } else {
                alert("Parametros obrigatórios nao preenchidos")
            }
        } catch (error) {
            alert("Servidore Fora de serviço, ou parametros obrigatórios nao preenchidos")
        }
    }
    const validatePJ = function () {
        if (typeUser == '2') {
            if (cnpj == undefined || cnpj == null || cnpj.length == 0) {
                return false
            }
        }

        return true
    }
    
    const validate = function (): boolean {
        if (cpf && rg && name && telephone && typeUser && registerDate && dateBirth && email) {
            return true
        }

        return false
    }

    return (
        <div className="container-userplan formalign">
            <div className="form">
                <div className="container-type-person">
                    <div className="divradio">
                        <label>Pessoa Fisica</label>
                        <InputRadio name="typeuser" id="1" value="pf" setValue={setTypeUser} />
                    </div>
                    <div>
                        <label>Pessoa Juridica</label>
                        <InputRadio name="typeuser" id="2" value="pj" setValue={setTypeUser} />
                    </div>
                </div>
                <div className="contentinputs">
                    <InputMine placeholder="Nome" value={name} setValue={setName} />
                    <InputMine placeholder="CPF" type="text" maxLength={11} value={cpf} setValue={setCPF} />
                    {typeUser === "2" ?
                        <InputMine placeholder="CNPJ" value={cnpj} setValue={setCNPJ} />
                        :
                        null
                    }
                </div>
                <div className="contentinputs">
                    <InputMine placeholder="RG" type="text" maxLength={11} value={rg} setValue={setRG} />
                    <InputMine placeholder="Data Nasc: DD/MM/YYYY" maxLength={10} type="text" value={dateBirth} setValue={setDateBirth} />
                </div>
                <div className="contentinputs">
                    <InputMine placeholder="Telefone: (xx)xxxxxxxx" type="text" value={telephone} setValue={setTelephone} />
                    <InputMine placeholder="Email" type="email" value={email} setValue={setEmail} maxLength={60} />
                </div>
                <div className="contentinputs informationData">
                    <h4>Data de cadastro:</h4>
                    <label style={{ paddingLeft: "1%", color: "#dd2c00" }}>{date.toLocaleDateString("pt-BR")}</label>
                </div>
            </div>
            <div className="contButton">
                <ButtonPage path="/listuserplan" wherego="Listagem" />
                <ButtonPage path="/" wherego="Plano" />
                <ButtonConfirm onPress={() => data()} />
            </div>
        </div>
    )
})