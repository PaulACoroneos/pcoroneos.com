import * as React from "react";

const SectionContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    {children}
  </div>
);

export default SectionContainer;
