import { createContext, useState } from "react"

export const ScaleContext = createContext()

export const ScaleContextProvider = (props) => {
    const [scale, setScale] = useState([]);

    return (
        <ScaleContext.Provider value={{scale, setScale}}>
            {props.children}
        </ScaleContext.Provider>
    )
}