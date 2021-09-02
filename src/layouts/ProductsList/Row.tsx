import { memo } from "react";
import { FC } from "react";
import { IProduct } from "src/services/products";
import { ProductRowStyle } from "./styles";

interface ProductRowProps {
  productData?: IProduct;
}
const ProductRow: FC<ProductRowProps> = ({ productData }) => {
  return (
    <tr className="alert" role="alert">
      <td>{productData.id}</td>
      <ProductRowStyle productColor={productData.color}>
        <td>
          <label className="customcheckbox m-b-20">
            <span></span>
          </label>
        </td>
      </ProductRowStyle>
      <td>{productData.name}</td>
      <td>{productData.pantone_value}</td>
      <td>{productData.year}</td>
    </tr>
  );
};

export default memo(ProductRow);
