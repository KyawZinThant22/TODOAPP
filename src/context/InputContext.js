import { createContext, useState } from "react";


export const InputContext = createContext();

export const InputContextProvider = ({children}) => {

    const [input , setInput] = useState("")

    const InputContextValue = {
        input , 
        setInput
    }


    return (
        <InputContext.Provider value={InputContextValue}>
            {children}
        </InputContext.Provider>
    )
}

