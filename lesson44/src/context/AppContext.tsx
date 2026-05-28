import { useState } from "react";
import { AppContext } from "./AppContextData";

type Props = {
  children: React.ReactNode;
};

export function AppProvider({ children }: Props) {
  const [user, setUser] = useState("Julia");

  const changeUser = () => {
    setUser("Alex");
  };

  return (
    <AppContext.Provider value={{ user, changeUser }}>
      {children}
    </AppContext.Provider>
  );
}
