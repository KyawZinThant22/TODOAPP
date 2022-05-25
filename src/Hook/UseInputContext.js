import { useContext } from "react"
import { InputContext } from "../context/InputContext"


export const useInputContext = () => {
    const context  = useContext(InputContext)

    if(!context){
        throw Error("UseInputContext must be inside useInputContextProvider");
    }

    return context;
}