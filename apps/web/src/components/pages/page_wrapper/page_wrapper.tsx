import { ReactNode } from "react";
import { Header } from "src/components/organisms/header/header";

export type PageWrapperProps = {
  /**
   * page content.
   */
  children: ReactNode;
};

/**
 * naive page wrapper to keep DRY environment.
 */
export const PageWrapper = (props: PageWrapperProps) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};
