import "./globals.css";
import { StrainContextProvider } from "./contexts/strain.context";
import localFont from "next/font/local";

// const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({
  src: "./sohne.woff2",
  variable: "--font-sohne",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <StrainContextProvider>{children}</StrainContextProvider>
      </body>
    </html>
  );
}
