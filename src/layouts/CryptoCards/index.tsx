import { FC, memo } from "react";
import { Col } from "react-bootstrap";
import { CoinCard } from "./Card";

export const CryptoCards: FC = memo(() => {
  return (
    <div className="row">
      <Col lg={3} md={3}>
        <CoinCard title="bitcoin" />
      </Col>
      <Col lg={3} md={3}>
        <CoinCard title="ethereum" />
      </Col>
      <Col lg={3} md={3}>
        <CoinCard title="usdt" />
      </Col>
      <Col lg={3} md={3}>
        <CoinCard title="tron" />
      </Col>
    </div>
  );
});
