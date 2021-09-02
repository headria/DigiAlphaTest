import { IProduct } from "src/services/products";
import { IUser } from "src/services/users";

export interface ProductState {
  entities: IProduct[];
  selectedProduct?: IProduct;
  loading: boolean;
}

export interface UserState {
  entities: IUser[];
  selectedUser?: IUser;
  loading: boolean;
}

export interface CurrencyData {
  symbol: string;
  value: number;
}
export interface CurrencyState {
  entities: CurrencyData[];
  loading: boolean;
}

export interface IReducer {
  currencies: CurrencyState;
  products: ProductState;
  users: UserState;
}
