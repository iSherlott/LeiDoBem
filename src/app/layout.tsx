import { geistMonoFont, geistSansFont } from "@/shared/shared";
import { Metadata } from "next";
import manifest from "./manifest";
import React from 'react';
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Toast from "@/hooks/toast";
import Auth from "@/hooks/auth";
import { App } from "./app";

import "@styles/reset.css";
import "@styles/palette.css";
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
      <body className={`${geistSansFont.variable} ${geistMonoFont.variable}`} style={{ overflow: 'auto hidden' }}>
        <AntdRegistry>
          <Toast>
            <Auth>
              <App>
                {children}
              </App>
            </Auth>
          </Toast>
        </AntdRegistry>
      </body>
    </html>
  );
}
