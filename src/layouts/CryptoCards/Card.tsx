import classNames from "classnames";
import { FC, memo, useEffect, useState } from "react";
import { CustomCardStyle } from "./styles";

interface CoinCardProps {
  title?: string;
}
type SocketMessage = {
  [T in string]: number;
};

const ConstractorCoins = {
  bitcoin: "BTC",
  tron: "TRX",
  ethereum: "ETH",
  usdt: "USDT",
};

export const CoinCard: FC<CoinCardProps> = memo(({ title }) => {
  const [price, setPrice] = useState<number>(0);

  const getCurrentPrice = () => {
    const ws = new WebSocket(`wss://ws.coincap.io/prices?assets=${title}`);

    ws.onclose = () => {};
    ws.onmessage = (e) => {
      const message: SocketMessage = JSON.parse(e.data);
      setPrice(message[title]);
    };
  };
  useEffect(() => {
    getCurrentPrice();
  }, [title]);
  return (
    <CustomCardStyle className="card">
      <div className={classNames("card-body rounded ", title)}>
        <div className="currency-card--icon pull-right">
          <i className="cc BTC-alt" title={ConstractorCoins[title]}></i>
        </div>
        <h4>{title}</h4>
        <h2>
          <span>{price}</span>
        </h2>
      </div>
    </CustomCardStyle>
  );
});
