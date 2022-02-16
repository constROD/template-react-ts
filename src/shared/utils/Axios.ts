/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */

import LocalStorageUtil from './LocalStorage';

import axios, { AxiosResponse } from 'axios';
import { XHeader, HTTP_RESPONSES, HttpResponseType, Code } from 'shared/constants/Http';
import { AuthLocalStorage } from 'shared/constants/LocalStorage';
import { IHttpOptions, IHttpRequest, IHttpResponse } from 'shared/interfaces/Http';

const PrivateInstance = axios.create();
const PublicInstance = axios.create();

const defaultError = (errorData: any = {}) => ({
  data: {
    ...HTTP_RESPONSES[HttpResponseType.ServerError],
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
