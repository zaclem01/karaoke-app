import { FunctionComponent, PropsWithChildren } from "react";

export const Container: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">{children}</div>
    </>
  );
};
