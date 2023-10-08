import { FunctionComponent, PropsWithChildren } from "react";

export const LeftSide: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <div className="col-span-2">{children}</div>
    </>
  );
};
