import { GeneralService } from "src/types/generalService";
import { baseApi } from "./config";
import { Http } from "./http";

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export type UserParams = {
  id: number;
};

export const UsersApi = {
  getUsers: async (): Promise<GeneralService<IUser[]>> => {
    try {
      const request = await Http.Request<GeneralService<IUser[]>>({
        url: baseApi + "/users",
        methodType: "GET",
      });
      return request;
    } catch {
      return null;
    }
  },
  getUser: async ({ id }: UserParams): Promise<GeneralService<IUser>> => {
    try {
      const request = await Http.Request<GeneralService<IUser>>({
        url: baseApi + `/users/${id}`,
        methodType: "GET",
      });
      return request;
    } catch {
      return null;
    }
  },
};
