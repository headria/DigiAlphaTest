import { GeneralService } from "src/types/generalService";
import { baseApi } from "./config";
import { Http } from "./http";

export interface IProduct {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export type ProductParams = {
  id: number;
};
export const ProductsApi = {
  getProducts: async (): Promise<GeneralService<IProduct[]>> => {
    try {
      const request = await Http.Request<GeneralService<IProduct[]>>({
        url: baseApi + "/products",
        methodType: "GET",
      });
      return request;
    } catch {
      return null;
    }
  },
  getProduct: async ({
    id,
  }: ProductParams): Promise<GeneralService<IProduct>> => {
    try {
      const request = await Http.Request<GeneralService<IProduct>>({
        url: baseApi + `/products/${id}`,
        methodType: "GET",
      });
      return request;
    } catch {
      return null;
    }
  },
};
