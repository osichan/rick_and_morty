import {AxiosRequestConfig} from 'axios';

type tokenConfigProps = {
  method: 'GET' | 'DELETE' | 'POST' | 'PUT' | 'PATCH';
  url: string;
  query?: string;
  body?: any;
};
const tokenConfig = async ({
  method,
  url,
  query,
  body,
}: tokenConfigProps): Promise<AxiosRequestConfig<any>> => {
  const config: AxiosRequestConfig = {
    url: `${url}/?${query}`,
    method,
    data: body,
  };
  return config;
};

export default tokenConfig;
