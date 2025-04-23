"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { createContext } from "react";

export const ProviderContext = createContext();

export default function ContextProvider({ children }) {
  const LogOut = () => signOut();
  const { data: session } = useSession();
  const user = session?.user?.email;
  console.log(session);

  const allInformation = {
    LogOut,
    session,
    user,
  };

  return (
    <ProviderContext.Provider value={allInformation}>
      {children}
    </ProviderContext.Provider>
  );
}
