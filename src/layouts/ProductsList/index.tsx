import { memo } from "react";
import { useSelector } from "react-redux";
import { Loading, TableContainer } from "src/components";
import { IReducer } from "src/redux/store/types";
import ProductRow from "./Row";
import { ProductsContainer } from "./styles";

const HeaderColumns = memo(() => (
  <thead>
    <tr>
      <th>Id</th>
      <th>Color</th>
      <th>Name</th>
      <th>PantoneValue</th>
      <th>Year</th>
    </tr>
  </thead>
));

export const ProductList = () => {
  const productsList = useSelector(({ products }: IReducer) => products);

  return (
    <ProductsContainer>
      {productsList?.loading ? (
        <Loading />
      ) : (
        <TableContainer className="table-striped">
          <HeaderColumns />

          <tbody>
            {productsList?.entities?.map((product) => (
              <ProductRow key={product.id} productData={product} />
            ))}
          </tbody>
        </TableContainer>
      )}
    </ProductsContainer>
  );
};
