import type { Metadata } from "next";
import localFont from "next/font/local";
import Toast from "./hooks/toast";
import CustomAuthProvider from "./hooks/auth";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/animations.css";
import "./styles/globals.css";

const geistSans = localFont({
  src: "./shared/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./shared/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lei Do Bem 2.0",
  description: "aplicação base",
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ptBR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CustomAuthProvider>
          <Toast>
            {children}
          </Toast>
        </CustomAuthProvider>
      </body>
    </html>
  );
}
