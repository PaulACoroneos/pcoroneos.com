import * as React from "react";

const PageTitle = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-gray-900 text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
    {children}
  </h1>
);

export default PageTitle;
