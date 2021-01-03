import React, { useCallback, useContext, createContext } from 'react';
import { useHistory  } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../infra/services/api';

  // const handleDeleteAccount = useCallback(() => {
  //   Swal.fire({
  //     title: 'Tem certeza?',
  //     text: "Apagar sua conta não tem reversão!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Sim, deletar!',
  //     cancelButtonText: 'Não, cancelar!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire(
  //         'Deletada!',
  //         `Conta ${params.id_user} excluída com sucesso.`,
  //         'success'
  //       )
  //     }
  //   })
  // }, [params.id_user]);

import { UserData } from '../protocols/user';

interface UserHook {
  updateUser(credentials: UserData): Promise<void>;
  deleteUser(id: string): void;
}

const UserContext = createContext<UserHook>({} as UserHook);

const AccountContext: React.FC = ({ children }) => {
  const history = useHistory();

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
    console.log('Delete user: ', id);
  }, []);

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
