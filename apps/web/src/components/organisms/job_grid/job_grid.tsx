import { AgGridReact } from "ag-grid-react";
import { Grid } from "src/components/molecules/grid/grid";

const jobData = [
  {
    job_id: 1,
    job_name: "job1",
    task_id: 1,
    task_name: "task1",
  },

  {
    job_id: 1,
    job_name: "job1",
    task_id: 2,
    task_name: "task2",
  },

  {
    job_id: 1,
    job_name: "job1",
    task_id: 3,
    task_name: "task3",
  },
];

export const JobGrid: React.FC = () => {
    
  return (
    <div style={{ height: "300px" }}>
      <Grid
        rowData={jobData}
        columnDefs={[
          { headerName: "job_id", field: "job_id" },
          { headerName: "job_name", field: "job_name" },
          { headerName: "task_id", field: "task_id" },
          { headerName: "task_name", field: "task_name" },
        ]}
      />
    </div>
  );
};
