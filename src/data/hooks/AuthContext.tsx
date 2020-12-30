import React, { useContext, createContext, useCallback, useState } from 'react';

import api from '../../infra/services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface Auth {
  user: {
    name: string,
    email: string
  };
  signIn(credentials: SignInCredentials): Promise<void>;
}

interface AuthState {
  user: {
    name: string,
    email: string
  };
}

const AuthContextData = createContext<Auth>({} as Auth);

const AuthContext: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@CalComp:user');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('/user/login', { email, password });

      const userData = {
        name: response.data.name,
        email: response.data.email
      };

      setData({ user: userData });

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AuthContextData.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContextData.Provider>
  )
}

export function useAuth () {
  const context = useContext(AuthContextData);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export default AuthContext;
