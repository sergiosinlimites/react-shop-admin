import React, { useEffect, useContext, createContext, useState } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';

interface AppContextInterface {
  id: number;
  name: string;
  email: string;
  role: string;
  token: string;
}

type AuthProviderProps = {
  children: JSX.Element
};

const sampleUser: AppContextInterface = {
  id: 1,
  name: 'Admin',
  email: '',
  role: 'superAdmin',
  token: '',
};

const AuthContext = createContext<AppContextInterface | null>(null);

export function ProviderAuth({ children }: AuthProviderProps) {
  //const auth = useProvideAuth();
  return <AuthContext.Provider value={sampleUser}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<any>(null);

  const signIn = async (email: string, password: string) => {
    setUser('login');
  };

  return { user, signIn };
}
