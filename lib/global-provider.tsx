import { createContext, ReactNode, useContext } from "react";
import { useAppwrite } from "./useAppWrite";
import { getCurrentUser } from "./appwrite";
import value from "./../image.d";

interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}
interface GlobalContextType {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  refetch: (newParams?: Record<string, string | number>) => Promise<void>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: user,
    loading,
    refetch,
  } = useAppwrite({
    fn: getCurrentUser,
  });
  const isLoggedIn = !!user;
  console.log(JSON.stringify(user, null, 2));
  return (
    <GlobalContext.Provider value={{ isLoggedIn, loading, user, refetch }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
