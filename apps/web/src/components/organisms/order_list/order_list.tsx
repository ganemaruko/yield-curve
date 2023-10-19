import { Button } from "@mui/material";
import { Order, OrderProps } from "src/components/atoms/order/order";

export type OrderListProps = {
  orderList: OrderProps[];
};

export const OrderList = (props: OrderListProps) => {
  return (
    <div>
      {props.orderList.map((order) => {
        return <Order {...order}></Order>;
      })}

      <Button variant="contained">注文する</Button>
    </div>
  );
};
