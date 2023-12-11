import { AgGridReact } from "ag-grid-react";
import { PageWrapper } from "src/components/pages/page_wrapper/page_wrapper";

const data = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxter", price: 72000 },
];

export const YieldCurvePage = () => {
  return (
    <PageWrapper>
      <div style={{ width: "100vw", height: "100vh" }}>
        <AgGridReact
          rowData={data}
          columnDefs={[
            { headerName: "Make", field: "make" },
            { headerName: "Model", field: "model" },
            { headerName: "Price", field: "price" },
          ]}
        />
      </div>
    </PageWrapper>
  );
};
