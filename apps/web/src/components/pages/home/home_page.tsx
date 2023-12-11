import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "src/components/pages/page_wrapper/page_wrapper";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const ProductGrid = (props: { children: ReactNode }) => {
  return (
    <Grid item xs={12} sm={6} xl={3}>
      {props.children}
    </Grid>
  );
};

const Feature = (props: {
  icon: ReactNode;
  name: string;
  linkName: string;
}) => {
  const nav = useNavigate();
  return (
    <Button
      component="label"
      variant="outlined"
      startIcon={props.icon}
      color="primary"
      onClick={() => {
        nav(props.linkName);
      }}
      sx={{ textTransform: "none" }}
    >
      {props.name}
    </Button>
  );
};
export const HomePage = () => {
  return (
    <PageWrapper>
      {/* <Grid container spacing={2}>
        <ProductGrid>
          <Feature
            linkName="/yield-curve"
            icon={
              <TimelineIcon
                // fontSize="large"
                color={"primary"}
                // sx={{ fontSize: 60 }}
              />
            }
            name="Yield Curve"
          />
        </ProductGrid>
        <ProductGrid>
          <Feature
            linkName="/yield-curve"
            icon={
              <TimelineIcon
                fontSize="large"
                color={"primary"}
                sx={{ fontSize: 40 }}
              />
            }
            name="Yield Curve"
          />
        </ProductGrid>
        <ProductGrid>
          <Feature
            linkName="/yield-curve"
            icon={
              <TimelineIcon
                fontSize="large"
                color={"primary"}
                sx={{ fontSize: 40 }}
              />
            }
            name="Yield Curve"
          />
        </ProductGrid>
      </Grid> */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <TimelineIcon
            // fontSize="large"
            color={"primary"}
            // sx={{ fontSize: 60 }}
          />
          <Typography>Yield curve</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <CalendarMonthIcon
            // fontSize="large"
            color={"primary"}
            // sx={{ fontSize: 60 }}
          />
          <Typography>Calendar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            aaaaaaa
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </PageWrapper>
  );
};
