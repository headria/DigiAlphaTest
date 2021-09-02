import { colors } from "src/styles/colors";
import styled from "styled-components";

export const TableStyle = styled.div`
  min-width: 1000px !important;
  width: 100%;
  -webkit-box-shadow: 0px 5px 12px -12px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 0px 5px 12px -12px rgba(0, 0, 0, 0.29);
  box-shadow: 0px 5px 12px -12px rgba(0, 0, 0, 0.29);
  thead {
    th {
      border: none;
      padding: 30px;
      font-size: 13px;
      font-weight: 500;
      color: lighten(${colors["blackColor"]}, 50%);
    }
    tr {
      background: ${colors["whiteColor"]};
      border-bottom: 4px solid darken(#f8f9fd, 3%);
    }
  }
  tbody {
    tr {
      margin-bottom: 10px;
      border-bottom: 4px solid #f8f9fd;
      &:last-child() {
        border-bottom: 0;
      }
    }
    th,
    td {
      border: none;
      padding: 30px;
      font-size: 14px;
      background: ${colors["whiteColor"]};
      vertical-align: middle;
    }
    td {
      &.status {
        span {
          position: relative;
          border-radius: 30px;
          padding: 4px 10px 4px 25px;
          &:after {
            position: absolute;
            top: 9px;
            left: 10px;
            width: 10px;
            height: 10px;
            content: "";
            border-radius: 50%;
          }
        }
        .active {
          background: lighten(${colors["greenColor"]}, 25%);
          color: darken(${colors["greenColor"]}, 25%);
          &:after {
            background: darken(${colors["greenColor"]}, 20%);
          }
        }
        .waiting {
          background: lighten(${colors["yellowColor"]}, 25%);
          color: darken(${colors["yellowColor"]}, 25%);
          &:after {
            background: darken(${colors["yellowColor"]}, 15%);
          }
        }
      }
      .img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .email {
        margin: 0 3px;
        span {
          display: block;
          &:last-child() {
            font-size: 12px;
            color: rgba(0, 0, 0, 0.3);
          }
        }
      }
      .close {
        span {
          font-size: 12px;
          color: ${colors["alerColor"]};
        }
      }
    }
  }
`;
