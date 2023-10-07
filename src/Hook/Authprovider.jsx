import React, { createContext } from 'react';

export const AuthContext = createContext(null);


const Authprovider = ({children}) => {

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;