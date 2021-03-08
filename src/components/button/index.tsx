import react from 'react'
import './styles.css'
export const ButtonConfirm = react.memo(()=>{
    return(
        <button type="button" className="buttonStyle">
            Confirmar
        </button>
    )
})

export const ButtonPage = react.memo(()=>{
    return(
        <button type="button" className="buttonStylePage">
            Ir para
        </button>
    )
})