import react from 'react'
import './styles.css'
import { Link, useHistory  } from 'react-router-dom'
interface ButtonConfirm{
    onPress(): Promise<void>
}

export const ButtonConfirm = react.memo((props: ButtonConfirm)=>{

    const { onPress } = props;

    return(
        <button type="button" className="buttonStyle" onClick={()=> onPress()}>
            Confirmar
        </button>
    )
})

interface ButtonPage {
    path: string,
    wherego?: string
}

export const ButtonPage = react.memo((props: ButtonPage)=>{

    let history = useHistory();
    function GoTo(){
        history.push(path)
    }
    const { wherego, path } = props;

    return(
        <button type="button" className="buttonStylePage" onClick={()=> GoTo()}>
            Pag. {wherego}
        </button>
    )
})