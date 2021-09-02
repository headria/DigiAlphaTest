import { stringify } from "query-string";
import axios from "./axios";
export type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "link"
  | "LINK"
  | "unlink"
  | "UNLINK";

interface HeaderProps {
  Authorization?: string;
  formData?: any;
}

export interface IBodyRequest extends HeaderProps {
  methodType: Method;
  url: string;
  params?: any;
  payload?: any;
}
export const Http = {
  Request: async <A>({
    methodType,
    url,
    formData,
    params,
    payload,
  }: IBodyRequest): Promise<A> => {
    return new Promise(async (resolve, reject) => {
      const query = params ? `?${stringify({ ...params })}` : "";

      let headers: any = fillHeaderData({ formData });

      let body = undefined;

      body = payload;

      if (formData) body = formData;

      const axiosConfig = {
        method: methodType,
        url: `${url}${query}`,
        data: body,
        headers,
        timeout: 60000,
      };
      console.log("axiosConfig", axiosConfig);
      axios(axiosConfig)
        .then(async (x) => {
          if (x.status === 200) {
            let response: A;
            const data = x.data;
            response = data;

            return resolve(response);
          }

          return reject(x);
        })
        .catch((e) => {
          console.log("get status Code", e);

          return reject(e);
        });
    });
  },
};

const fillHeaderData = ({ Authorization, formData }: HeaderProps) => {
  return {
    "Content-Type": "application/json",
    Authorization,
    ...formData?.getHeaders(),
  };
};
