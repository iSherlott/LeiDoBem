import Toast from "../hooks/toast";
import { App } from "../hooks/app";
import Auth from "../hooks/auth";
import { geistMonoFont, geistSansFont } from "@/shared/shared";
import { Metadata } from "next";
import manifest from "./manifest";
import { AntdRegistry } from '@ant-design/nextjs-registry';

import "@styles/reset.css";
import "@styles/variables.css";
import "@styles/animations.css";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: manifest().name,
  description: manifest().description,
  icons: manifest().application_icon
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ptBR">
      <body className={`${geistSansFont.variable} ${geistMonoFont.variable}`}>
        <Auth>
          <AntdRegistry>
            <App>
              <Toast>
                {children}
              </Toast>
            </App>
          </AntdRegistry>
        </Auth>
      </body>
    </html>
  );
}
