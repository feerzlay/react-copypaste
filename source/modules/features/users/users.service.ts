import { useRequest } from '~modules/common/use-request';
import { IUser } from './users.types';

export const useUsersService = () => {
  const request = useRequest();

  return {
    getAll: (): [
      Promise<{
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
        data: IUser[];
      }>,
      () => void
    ] => {
      const controller = new AbortController();
      const signal = controller.signal;

      const promise = request(`${process.env.API_URL}/api/users`, { signal }).then((response) => response.json());

      return [promise, controller.abort];
    },
    getOne: (id: number): [Promise<{ data: IUser }>, () => void] => {
      const controller = new AbortController();
      const signal = controller.signal;

      const promise = request(`${process.env.API_URL}/api/users/${id}`, {
        signal
      }).then((response) => response.json());

      return [promise, controller.abort];
    }
  };
};
