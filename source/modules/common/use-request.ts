export interface IRequestError<T extends Record<string, unknown> = Record<string, unknown>> {
  status: number;
  error: T;
}

export const useRequest = () => {
  return (input: RequestInfo, init?: RequestInit) =>
    fetch(input, init).then((response) => {
      if (response.ok) {
        return response;
      } else {
        return response.json().then((error: IRequestError) => {
          throw { status: response.status, error };
        });
      }
    });
};
