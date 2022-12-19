import LocalStorageUtil from './LocalStorage';

import axios, { AxiosResponse } from 'axios';
import { Code, HTTP_RESPONSES, XHeader } from 'shared/constants/Http';
import { AuthLocalStorage } from 'shared/constants/LocalStorage';
import { HttpOptions, HttpRequest, HttpResponse } from 'shared/types/Http';

const PrivateInstance = axios.create();
const PublicInstance = axios.create();

const defaultError = (errorData: any = {}) => ({
  data: {
    ...HTTP_RESPONSES.ServerError,
    message: `Something went wrong. Please try again.`,
    ...errorData,
  },
});

PrivateInstance.interceptors.request.use(config => {
  if (config.headers) {
    config.headers[XHeader.IdToken] = LocalStorageUtil.get(AuthLocalStorage.IdToken);
    config.headers[XHeader.AccessToken] = LocalStorageUtil.get(AuthLocalStorage.AccessToken);
  }
  return config;
});

PrivateInstance.interceptors.response.use(
  res => res,
  err => {
    if (!err.response) {
      return Promise.reject({ ...err, ...defaultError() });
    }

    if (err.response.data.code === Code.Unauthorized) {
      LocalStorageUtil.clear();
    }

    return Promise.reject({ ...err.response, ...defaultError(err.response.data) });
  }
);

PublicInstance.interceptors.response.use(
  res => res,
  err => {
    if (!err.response) {
      return Promise.reject({ ...err, ...defaultError() });
    }

    return Promise.reject({ ...err.response, ...defaultError(err.response.data) });
  }
);

export const AxiosUtil = async <R = unknown>(
  request: HttpRequest,
  options: HttpOptions = { isPublic: false }
): Promise<AxiosResponse<HttpResponse<R>>> => {
  try {
    const { isPublic } = options;
    const instance = isPublic ? PublicInstance : PrivateInstance;
    const data = await instance({ ...request, data: request.body });
    return data;
  } catch (err) {
    const error = err as AxiosResponse<HttpResponse<R>>;
    return error;
  }
};

export default AxiosUtil;
