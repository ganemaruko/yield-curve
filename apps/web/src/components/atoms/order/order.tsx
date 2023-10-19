import Icon from "@mui/icons-material/Inventory2Outlined";
import PlusIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import MinusIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
export type OrderProps = {
  orderName: string;
  orderPrice: number;
  orderCount: number;
};
export const Order = (props: OrderProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <MinusIcon />
          <PlusIcon />
        </ListItemIcon>
        <ListItemText
          primary={props.orderName}
          secondary={`${props.orderCount} x ${props.orderPrice}`}
        />
      </ListItemButton>
    </ListItem>
  );
};
