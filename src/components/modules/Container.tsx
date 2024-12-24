import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return <div className={`mx-auto ${className} px-2`}>{children}</div>;
};

export default Container;
