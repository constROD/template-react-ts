import { AxiosRequestConfig } from 'axios';

export interface HttpResponse<R = unknown> {
  message: string;
  statusCode: number;
  code: number;
  records?: R;
  error?: any;
}

export type HttpRequest = {
  params?: any;
  body?: any;
} & AxiosRequestConfig;

export interface HttpOptions {
  isPublic?: boolean;
}
