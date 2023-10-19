import { Grid } from "@mui/material";
import { ReactNode } from "react";
import { OrderList } from "src/components/organisms/order_list/order_list";

export type TabTemplateProps = {
  children?: ReactNode;
};

/**
 * Page template for each tab
 */
export const TabTemplate = (props: TabTemplateProps) => {
  return (
    <Grid container spacing={2}>
      <Grid xl={10} lg={10} sm={12} md={12} xs={12}>
        {props.children}
      </Grid>
      <Grid xl={2} lg={2} md={0} sm={0} xs={0}>
        <OrderList
          orderList={[
            {
              orderCount: 1,
              orderName: "ビール",
              orderPrice: 500,
            },
            {
              orderCount: 1,
              orderName: "ビール",
              orderPrice: 500,
            },
            {
              orderCount: 1,
              orderName: "ビール",
              orderPrice: 500,
            },
          ]}
        ></OrderList>
      </Grid>
    </Grid>
  );
};
