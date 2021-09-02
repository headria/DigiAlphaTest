import { FC } from "react";
import { TableStyle } from "./styles";
import classNames from "classnames";

interface TableContainerProps {
  className?: string;
}

export const TableContainer: FC<TableContainerProps> = ({
  children,
  className,
}) => {
  const classes = classNames("table-responsive-xl", className);
  return <TableStyle className={classes}>{children}</TableStyle>;
};
