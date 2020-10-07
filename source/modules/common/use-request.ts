export const useRequest = () => {
  return (input: RequestInfo, init?: RequestInit) =>
    fetch(input, init).then((response) => {
      if (response.ok) {
        return response;
      } else {
        throw response;
      }
    });
};
