import React, { useCallback, useContext, createContext } from 'react';
import Swal from 'sweetalert2';
import api from '../../infra/services/api';
import { useAuth } from '../../data/hooks/auth';

import { UserData } from '../protocols/user';

interface UserHook {
  updateUser(credentials: UserData): Promise<void>;
  deleteUser(id: string): void;
}

const UserContext = createContext<UserHook>({} as UserHook);

const AccountContext: React.FC = ({ children }) => {
  const { signOut } = useAuth();

  const updateUser = useCallback(async (user: UserData) => {
    await api.put('/user', user)
      .then(() => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Dados atualizados com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      }).catch(() => {
        Swal.fire({
          title: 'Erro!',
          text: 'Algo inesperado occorreu!',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      })
  }, []);

  const deleteUser = useCallback(async (id) => {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Apagar sua conta não tem reversão!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Não, cancelar!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await api.delete(`/user/${id}`)
        .then(() => {
          Swal.fire(
            'Deletada!',
            `Conta excluída com sucesso.`,
            'success'
          ).then(() => {
            signOut();
          })
      });
      }
    })
  }, [signOut]);

  return (
    <UserContext.Provider value={{ updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUpAndDel() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUpAndDel must be used within an UserProvider');
  }

  return context;
}

export default AccountContext;
