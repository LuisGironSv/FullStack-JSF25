import { createContext, useState } from "react";

//Crear mi contexto
export const UserContext = createContext(null);

//Crear mi proveedor? Distribuye info (el valor que le demos)

export const AsdProvider = ({children}) => {
    const [user, setUser] = useState(null);



    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>

    )
}
