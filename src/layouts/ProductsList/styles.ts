import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100%;
  background-color: #fff;
`;

interface ProductRowStyleProps {
  productColor?: string;
}
export const ProductRowStyle = styled.div<ProductRowStyleProps>`
  .customcheckbox {
    display: block;
    position: relative;
    padding-left: 24px;
    font-weight: 100;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .customcheckbox span {
    position: absolute;
    top: -3px;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 6px;
    background-color: ${({ productColor }) => productColor};
  }
`;
