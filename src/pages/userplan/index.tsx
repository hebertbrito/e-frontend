import react from 'react'
import './styles.css'
import { InputMine, InputRadio, ButtonPage, ButtonConfirm } from '../../components'
export class UserPlan extends react.PureComponent {

    state = {
        registrationDate: new Date()
    }

    teste(value: any) {
        console.log(value)
    }

    render() {
        return (
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
                        <InputMine placeholder="Nome do Plano" maxLength={100}/>
                        <InputMine placeholder="Nome do recebidor" maxLength={100} />
                    </div>
                    <div className="contentinputs">
                        <InputMine placeholder="D. Inicial Vigência: DD/MM/YY" maxLength={10}/>
                        <InputMine placeholder="D. Final Vigência: DD/MM/YY" maxLength={10} />
                    </div>
                    
                    <div className="contentinputs informationData">
                        <h4>Data de cadastro:</h4>
                        <label style={{ paddingLeft: "1%", color: "#dd2c00" }}>{this.state.registrationDate.toLocaleDateString("pt-BR")}</label>
                    </div>
                </div>
                <div className="contButton">
                    <ButtonPage />
                    <ButtonConfirm />
                </div>
            </div>
        )
    }
}