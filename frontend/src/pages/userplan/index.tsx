import react from 'react'
import './styles.css'
export class UserPlan extends react.PureComponent {

    state = {
        enddate: new Date()
    }

    teste(value: any) {
        console.log(value)
    }

    render() {
        return (
            <div className="container-userplan">
                <div className="form">
                    <h4>
                        Plano E-pharma Teste
                    </h4>
                    <div className="sub-form-1">

                    </div>
                    <div className="sub-form-2">
                        <label>Duração do Plano - em anos*</label>
                        <label>Vigência inicial hoje</label>
                        <div className="sub-form-1">
                            <div className="check-box">
                                <label>1 Ano</label>
                                <input type="radio" name="typedurationplan" id="1" value="1" />
                            </div>
                            <div className="check-box">
                                <label>2 Anos</label>
                                <input type="radio" name="typedurationplan" id="2" value="2" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}