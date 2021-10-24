export const setRequestInterceptor = (config) => {
  return config;
};

export const setResponseInterceptor = (response) => {
  return response;
};

export const setErrorInterceptor = (error) => {
  Promise.reject(error);
};
