import { createContext } from "react";

type AppContextType = {
  user: string;
  changeUser: () => void;
};

export const AppContext = createContext<AppContextType>({
  user: "",
  changeUser: () => {},
});

export type { AppContextType };
