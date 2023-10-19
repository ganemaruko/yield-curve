import { RenderTree, Tree } from "src/components/molecules/tree/tree";
import { Header } from "src/components/organisms/header/header";
import { JobGrid } from "src/components/organisms/job_grid/job_grid";

const data: RenderTree = {
  id: "root",
  name: "Parent",
  children: [
    {
      id: "1",
      name: "Child - 1",
    },
    {
      id: "3",
      name: "Child - 3",
      children: [
        {
          id: "4",
          name: "Child - 4",
        },
      ],
    },
  ],
};

export const HomePage = () => {
  return (
    <div>
      <Header />
      {/* <JobGrid /> */}
      {/* <Tree treeData={data} /> */}
    </div>
  );
};
