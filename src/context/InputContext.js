import { createContext, useReducer, useState } from "react";


export const InputContext = createContext();

const themeReducer = (state , action) => {
    switch(action.type) {
        case 'CHANGE_MODE':
            return {...state , mode : action.payload}
        case  'INPUT_CHANGE':
            return {...state , input : action.payload}
        default:
            return state;
    }
}

export const InputContextProvider = ({children}) => {

  

    const [state , dispatch] = useReducer(themeReducer , {
        input : '' ,
        mode : 'VeryDarkBlue'
    })

    const changeMode = (mode) => {
        dispatch({type: 'CHANGE_MODE', payload : mode})
    }

    return (
        <InputContext.Provider value={{...state, changeMode, dispatch}}>
            {children}
        </InputContext.Provider>
    )
}

