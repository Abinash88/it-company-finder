import React from "react";
import { createContext } from "vm";

export const authContextTypes = {

};

const AuthContext = createContext<authContextTypes | undefined>(undefined);

export const AuthContextData = ({
  children,
}: {
  children: React.ReactNode;
}) => {

    

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthContext;
