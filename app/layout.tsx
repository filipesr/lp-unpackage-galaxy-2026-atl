import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Galaxy Unpacked 2026 | Samsung",
  description:
    "Assista ao vivo o evento Samsung Galaxy Unpacked 2026. 26 de fevereiro às 13h (BRT).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
