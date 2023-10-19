import { AgGridReact, AgGridReactProps } from "ag-grid-react";

type GridProps = {
  style?: React.CSSProperties;
} & AgGridReactProps;

export const Grid = ({ style, ...agGridProps }: GridProps) => {
  return (
    <div className="ag-theme-balham" style={style}>
      <AgGridReact
        domLayout="autoHeight"
        {...agGridProps}
        defaultColDef={{ resizable: true, suppressMovable: true }}
      />
    </div>
  );
};
