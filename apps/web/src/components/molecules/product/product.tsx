import { BaseImage } from "src/components/atoms/image/image";

export type ProductProps = {
  imageSrc: string;
  productName: string;
};

/**
 * product image.
 */
export const Product = (props: ProductProps) => {
  return (
    <div>
      <div>{props.productName}</div>
      <BaseImage src={props.imageSrc} />
    </div>
  );
};
