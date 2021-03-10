import react, { useState, useEffect } from 'react'
import './styles.css'
import { InputMine, ButtonConfirm, ButtonPage } from '../../components'
import { GetListUserPlan } from '../../services/api/GetListUserPlan/index'
import { GerListUserPlan } from '../../models/GetListUserPlan'

export const ListUserPlanView = react.memo(() => {

    const [values, setvalues] = useState<Array<GerListUserPlan>>()
    const [name, setName] = useState<string>()
    const [cpf, setCPF] = useState<string>()
    const [cnpj, setCNPJ] = useState<string>()
    const [registerDate, setRegisterDate] = useState<string>()

    useEffect(() => {
        async function FirstSearch() {
            try {
                const bdy = { name, cpf, cnpj, registerDate }
                const response = await GetListUserPlan(bdy)
                if (response) {
                    setvalues(response)
                }
            } catch (error) {
                alert("Rota erra para busca, verificar URL_LOCAL ou Problema no servidor")
            }
        }

        FirstSearch()

    }, [])

    const Data = async function () {
        try {
            const bdy = {
                name,
                cpf,
                cnpj,
                registerDate
            }
            const response = await GetListUserPlan(bdy)
            if (response) {
                setvalues(response)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container-userplan formalign">
            <div className="containerfilter">
                <div>
                    <InputMine placeholder="Nome" type="text" maxLength={50} value={name} setValue={setName} />
                    <InputMine placeholder="CPF" type="text" maxLength={13} value={cpf} setValue={setCPF} />
                    <InputMine placeholder="CNPJ" type="text" maxLength={13} value={cnpj} setValue={setCNPJ} />
                    <InputMine placeholder="Data Cadastro Plano" type="text" maxLength={50} value={registerDate} setValue={setRegisterDate} />
                </div>
                <div>
                    <ButtonConfirm onPress={Data} />
                    <ButtonPage path="/" wherego="Plano" />
                    <ButtonPage path="/user" wherego="Usuario" />
                </div>
            </div>
            <div className="formlist">
                <div id="headerform">
                    <div className="p-child-form">
                        <p>Usuário</p>
                    </div>
                    <div className="p-child-form">
                        <p>Plano</p>
                    </div>
                    <div className="p-alone">
                        <p>Data de vigência</p>
                    </div>
                </div>
                {values ?
                    values.map((item, index) => (
                        <div className="bodytextform" key={item.registerDate + index}>
                            <div>
                                <p>{item.name}</p>
                            </div>
                            <div>
                                <p>{item.planName}</p>
                            </div>
                            <div>
                                <p>{item.registerDate}</p>
                            </div>
                        </div>
                    ))
                    :
                    null
                }
            </div>
        </div>
    )
})