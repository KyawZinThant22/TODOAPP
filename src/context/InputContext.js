import { createContext, useState } from "react";


export const InputContext = createContext();

export const InputContextProvider = ({children}) => {

    const [input , SetInput] = useState("")

    const InputContextValue = {
        input , 
        SetInput
    }


    return (
        <InputContext.Provider value={InputContextValue}>
            {children}
        </InputContext.Provider>
    )
}

