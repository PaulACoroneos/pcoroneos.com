import SectionContainer from "../../components/section-container";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SectionContainer>{children}</SectionContainer>;
}
