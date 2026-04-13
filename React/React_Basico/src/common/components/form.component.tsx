import React from "react";
import "./form.style.css"
interface Props {
    value:string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    handleClick?: (e) => void 
}



export const Form:React.FC<Props> = ({value, setValue, handleClick}) => {
    const changeValue = (e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>):void => {
        setValue(e.target.value)
    }

    return  <form action="">
                <input type="text" placeholder="name" value={value} onChange={(e) => changeValue(e)} />
                {handleClick ? <button type="submit" onClick={e => handleClick(e)}>Enviar</button> : <></>}
            </form>
} 