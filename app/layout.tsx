import Header from "../components/header";

import '../css/tailwind.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body><Header />{children}</body>
    </html>
  );
}