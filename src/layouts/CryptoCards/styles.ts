import styled from "styled-components";

export const CustomCardStyle = styled.div`
  h4 {
    text-transform: capitalize;
  }
  i.cc {
    font-size: 60px;
    color: rgba(255, 255, 255, 0.2);
  }

  .card-body .progress {
    height: 6px;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .card-body .progress .progress-bar {
    background-color: #fff;
  }

  .card-body h2,
  .card-body h4,
  .card-body p {
    color: #eaeff3;
  }

  .card-body.bitcoin {
    background-color: #f7931a;
  }

  .card-body.ethereum {
    background-color: #345281;
  }

  .card-body.usdt {
    background-color: #009393;
  }

  .card-body.tron {
    background-color: #ea0000;
  }
`;
