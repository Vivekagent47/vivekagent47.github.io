import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Vivek Chauhan",
  description: "Vivek Chauhan's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
