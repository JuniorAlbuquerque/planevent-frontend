import React, { useCallback, useContext, createContext } from 'react';
import Swal from 'sweetalert2';
import api from '../../infra/services/api';
import { Events } from '../protocols/events';
import { useShowComponent } from '../hooks/showcomponent';

interface EventHook {
  updateEvent(credentials: Events): Promise<void>;
  deleteEvent(id: number): void;
}

const EventContextData = createContext<EventHook>({} as EventHook);

const EventContext: React.FC = ({ children }) => {
  const { setRender } = useShowComponent();

  const updateEvent = useCallback(async (eventdata: Events) => {
    await api.put('/event', eventdata)
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

  const deleteEvent = useCallback(async (id) => {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Apagar um evento não tem reversão!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Não, cancelar!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await api.delete(`/event/${id}`)
        .then(() => {
          Swal.fire(
            'Sucesso!',
            `Evento excluído com sucesso.`,
            'success'
          ).then(() => {
            setRender(true);
          })
      });
      }
    })
  }, []);

  return (
    <EventContextData.Provider value={{ updateEvent, deleteEvent }}>
      {children}
    </EventContextData.Provider>
  );
}

export function useEvent() {
  const context = useContext(EventContextData);

  if (!context) {
    throw new Error('useEvent must be used within an UserProvider');
  }

  return context;
}

export default EventContext;
