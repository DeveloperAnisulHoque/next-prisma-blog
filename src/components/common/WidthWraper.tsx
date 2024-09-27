import React from "react";

const WidthWraper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="max-w-[1400px] w-11/12 mx-auto ">{children}</div>;
};

export default WidthWraper;
