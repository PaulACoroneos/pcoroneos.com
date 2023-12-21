import * as React from "react";

const SectionContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-3xl px-2 xl:max-w-5xl">{children}</div>
);

export default SectionContainer;
