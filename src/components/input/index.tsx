import react from 'react'
import './styles.css'

interface InputMine {
    placeholder: string,
    maxLength?: number,
    type?: string,
    pattern?: string
    value?: string,
    setValue: react.Dispatch<react.SetStateAction<string | undefined>>
}

export const InputMine = react.memo((props: InputMine) => {

    const { placeholder, maxLength, type, pattern, value, setValue } = props;

    return (
        <input placeholder={placeholder} type={type}
            className="inputStyle"
            maxLength={maxLength}
            pattern={pattern}
            value={value}
            onChange={text => setValue(text.target.value.toString())}
        />
    )
})

interface InputRadio {
    id: string,
    name: string,
    value: string
}

export const InputRadio = react.memo((props: InputRadio) => {

    const { id, name, value } = props;

    return (
        <input type="radio"
            className="inputradio"
            id={id}
            name={name}
            value={value}
        />
    )
})