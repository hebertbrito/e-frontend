import react from 'react'
import './styles.css'
import { InputMine, ButtonConfirm, ButtonPage } from '../../components'

export class ListUserPlanView extends react.PureComponent {
    render() {
        return (
            <div className="container-userplan formalign">
                <div className="containerfilter">
                    <div>
                        <InputMine placeholder="Nome"/>
                        <InputMine placeholder="CPF"/>
                        <InputMine placeholder="CNPJ"/>
                        <InputMine placeholder="Data Cadastro Plano"/>
                    </div>
                    <div>
                        <ButtonConfirm />
                        <ButtonPage />
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
                    <div className="bodytextform">
                        <div>
                            <p>Hebert</p>
                        </div>
                        <div>
                            <p>Plano Epharma Plus</p>
                        </div>
                        <div>
                            <p>18/09/1997</p>
                        </div>
                    </div>
                    <div className="bodytextform">
                        <div>
                            <p>Lucas</p>
                        </div>
                        <div>
                            <p>Plano Epharma Gold</p>
                        </div>
                        <div>
                            <p>18/10/1997</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}