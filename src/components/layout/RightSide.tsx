import { FunctionComponent, PropsWithChildren } from "react";

export const RightSide: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <div className="col-span-1">{children}</div>
    </>
  );
};
