/* eslint-disable no-param-reassign */

import LocalStorageUtil from './LocalStorage';

import axios, { AxiosResponse } from 'axios';
import { XHeader, HTTP_RESPONSES, HttpResponseType, Code } from 'shared/constants/Http';
import { AuthLocalStorage } from 'shared/constants/LocalStorage';
import { IHttpOptions, IHttpRequest, IHttpResponse } from 'shared/interfaces/Http';

const PrivateInstance = axios.create();
const PublicInstance = axios.create();

PrivateInstance.interceptors.request.use(config => {
  if (config.headers) {
    config.headers[XHeader.IdToken] = LocalStorageUtil.get(AuthLocalStorage.IdToken);
    config.headers[XHeader.AccessToken] = LocalStorageUtil.get(AuthLocalStorage.AccessToken);
  }
  return config;
});

PrivateInstance.interceptors.response.use(
  res => res,
  error => {
    if (!error.response) {
      return Promise.reject({
        ...error,
        data: {
          ...HTTP_RESPONSES[HttpResponseType.ServerError],
          message: `Can't connect to the server. Please try again later.`,
          error,
        },
      });
    }

    if (error.response.data.code === Code.Unauthorized) {
      LocalStorageUtil.clear();
    }
    return Promise.reject(error.response);
  }
);

PublicInstance.interceptors.response.use(
  res => res,
  error => {
    if (!error.response) {
      return Promise.reject({
        ...error,
        data: {
          ...HTTP_RESPONSES[HttpResponseType.ServerError],
          message: `Can't connect to the server. Please try again later.`,
          error,
        },
      });
    }

    return Promise.reject(error.response);
  }
);

export const AxiosUtil = async <R = unknown>(
  request: IHttpRequest,
  options: IHttpOptions = { isPublic: false }
): Promise<AxiosResponse<IHttpResponse<R>>> => {
  try {
    const { isPublic } = options;
    const instance = isPublic ? PublicInstance : PrivateInstance;
    const data = await instance({ ...request, data: request.body });
    return data;
  } catch (err) {
    const error = err as AxiosResponse<IHttpResponse<R>>;
    return error;
  }
};

export default AxiosUtil;
