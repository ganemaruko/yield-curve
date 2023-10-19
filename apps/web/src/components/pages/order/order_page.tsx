import { Tab, Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactNode, useState } from "react";
import { DrinkTab } from "src/components/pages/order/tabs/drink_tab";
import { TabTemplate } from "src/components/templates/tab_template/tab_template";

type TabPanelProps = {
  children?: ReactNode;
  index: number;
  value: number;
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export const OrderPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="ドリンク一覧" {...a11yProps(0)} />
          <Tab label="料理一覧" {...a11yProps(1)} />
          <Tab label="おすすめ" {...a11yProps(2)} />
          <Tab label="季節の逸品" {...a11yProps(3)} />
          <Tab label="その他" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TabTemplate>
          <DrinkTab />
        </TabTemplate>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DrinkTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <DrinkTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <DrinkTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <DrinkTab />
      </CustomTabPanel>
    </Box>
  );
};
