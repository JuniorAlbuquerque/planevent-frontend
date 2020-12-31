import React, { useContext, createContext, useCallback, useState } from 'react';
import { useHistory  } from 'react-router-dom';

import api from '../../infra/services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface Auth {
  user: {
    id: number,
    name: string,
    email: string
  };
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  user: {
    id: number,
    name: string,
    email: string
  };
}

const AuthContextData = createContext<Auth>({} as Auth);

const AuthContext: React.FC = ({children}) => {
  const history = useHistory();

  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@PlanEvent:user');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('/user/login', { email, password });

      const userData = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email
      };

      localStorage.setItem('@PlanEvent:user', JSON.stringify(userData));

      setData({ user: userData });

      history.push('/home');
    } catch (error) {
      alert('Erro de validação');
    }
  }, [history]);

  const signOut = useCallback(() => {
    localStorage.removeItem('@PlanEvent:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContextData.Provider value={{ user: data.user, signIn, signOut }}>
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
