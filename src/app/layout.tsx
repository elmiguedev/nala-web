import Providers from "@/components/config/Providers";
import NalitaNavbar from "@/components/ui/navbar/NalitaNavbar";
import { Nunito } from "next/font/google";
import './globals.css'
import { getServerSession } from "next-auth";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en" data-theme="pastel">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />
      </head>
      <body className={`${nunito.className} font-sans bg-base-200`}>
        <Providers>
          {session && <NalitaNavbar />}
          <div className="py-12  min-h-screen">
            <div className=" mx-auto max-w-3xl lg:max-w-5xl">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}