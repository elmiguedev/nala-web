import NalitaLayout from "@/components/ui/layout/NalitaLayout";
import "../globals.css";
import { Nunito } from "next/font/google";
import { Metadata } from "next";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nalita",
  description: "Nalita",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <NalitaLayout>{children}</NalitaLayout>
      </body>
    </html>
  );
}
