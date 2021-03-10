import react, { useState } from 'react'
import './styles.css'
import { InputMine, InputRadio, ButtonPage, ButtonConfirm } from '../../components'
import { CreatePlan } from '../../services/api/CreatePlan'

export const UserPlan = react.memo(() => {
    const [date, setDate] = useState(new Date)
    const [nameUser, setNameUser] = useState<string>()
    const [planName, setPlanName] = useState<string>()
    const [startDatePlan, setStartDatePlan] = useState<string>()
    const [endDatePlan, setEndDatePlan] = useState<string>()
    const [registerDate, setRegisterDate] = useState(new Date().toLocaleDateString("pt-BR"))
    const [TypeUser, setTypeUser] = useState<string>("1")

    const data = async function () {
        try {
            if(validate()){

                const body = {
                     date, nameUser, planName, startDatePlan, endDatePlan, registerDate
                }

                await CreatePlan(body)
                alert("Plano Criado com sucesso")
            }
        } catch (error) {
            alert("Erro no servidor ou parametros obrigatórios não preenchidos")
        }
    }

    const validate = function () {

        if (startDatePlan && startDatePlan) {
            const newEndDate = new Date(startDatePlan?.toString())
            const newStartDate = new Date(startDatePlan?.toString())

            if (newEndDate < newStartDate) {
                return false
            }
        }

        if (date && nameUser && planName && startDatePlan && endDatePlan && registerDate) {
            return true
        }

        return false
    }

    return (
        <div className="container-userplan formalign">
            <div className="form">
                <div className="contentinputs">
                    <InputMine placeholder="Nome do Plano" maxLength={100} value={planName} setValue={setPlanName} />
                    <InputMine placeholder="Nome do recebidor" maxLength={100} value={nameUser} setValue={setNameUser} />
                </div>
                <div className="contentinputs">
                    <InputMine placeholder="D. Inicial Vigência: DD/MM/YY" maxLength={10} value={startDatePlan} setValue={setStartDatePlan} />
                    <InputMine placeholder="D. Final Vigência: DD/MM/YY" maxLength={10} value={endDatePlan} setValue={setEndDatePlan} />
                </div>

                <div className="contentinputs informationData">
                    <h4>Data de cadastro:</h4>
                    <label style={{ paddingLeft: "1%", color: "#dd2c00" }}>{date.toLocaleDateString("pt-BR")}</label>
                </div>
            </div>
            <div className="contButton">
                <ButtonPage path="/listuserplan" wherego="Listagem" />
                <ButtonPage path="/user" wherego="Usuario" />
                <ButtonConfirm onPress={()=> data()}/>
            </div>
        </div>
    )
})