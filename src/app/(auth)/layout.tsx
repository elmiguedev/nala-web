import "../globals.css";
import { Nunito } from "next/font/google";
import { Metadata } from "next";
import { GoogleOAuthProvider } from "@react-oauth/google";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nalita",
  description: "Nalita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <GoogleOAuthProvider clientId="167610543234-58fp4to44cq2m2fqpt0v4mqais8028ie.apps.googleusercontent.com">
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
