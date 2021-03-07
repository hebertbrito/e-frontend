import react, { useState } from 'react'
import './styles.css'
import { InputMine, InputRadio, ButtonConfirm, ButtonPage } from '../../components'
export class User extends react.PureComponent {

    state = {
        date: new Date()
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
                        <InputMine placeholder="Nome" />
                        <InputMine placeholder="CPF" type="number" maxLength={11} />
                        <InputMine placeholder="CNPJ" />
                    </div>
                    <div className="contentinputs">
                        <InputMine placeholder="RG" type="number" maxLength={11} />
                        <InputMine placeholder="Data Nasc: DD/MM/YYYY" maxLength={10} type="text" />
                    </div>
                    <div className="contentinputs">
                        <InputMine placeholder="Telefone: (xx)xxxxxxxx" type="number" />
                        <InputMine placeholder="Email" type="email" />
                    </div>
                    <div className="contentinputs informationData">
                        <h4>Data de cadastro:</h4>
                        <label style={{ paddingLeft: "1%", color: "#dd2c00" }}>{this.state.date.toLocaleDateString("pt-BR")}</label>
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