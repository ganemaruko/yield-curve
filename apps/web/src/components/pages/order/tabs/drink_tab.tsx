import { Grid } from "@mui/material";
import { ReactNode } from "react";
import { BaseImage } from "src/components/atoms/image/image";
import { Product } from "src/components/molecules/product/product";
import beerImage from "src/images/menu/beer.jpg";

const ProductGrid = (props: { children: ReactNode }) => {
  return (
    <Grid item xs={12} sm={6} xl={3}>
      {props.children}
    </Grid>
  );
};

export const DrinkTab = () => {
  return (
    <Grid container spacing={2}>
      <ProductGrid>
        <Product imageSrc={beerImage} productName="ビール" />
      </ProductGrid>
      <ProductGrid>
        <Product imageSrc={beerImage} productName="ビール" />
      </ProductGrid>
      <ProductGrid>
        <Product imageSrc={beerImage} productName="ビール" />
      </ProductGrid>
      <ProductGrid>
        <Product imageSrc={beerImage} productName="ビール" />
      </ProductGrid>
      <ProductGrid>
        <Product imageSrc={beerImage} productName="ビール" />
      </ProductGrid>
    </Grid>
  );
};
