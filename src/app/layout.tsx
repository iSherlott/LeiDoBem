import { Metadata } from "next";
import manifest from "./manifest";
import React from 'react';
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Toast from "@/hooks/toast";
import Auth from "@/hooks/auth";
import { AppContext } from "../hooks/app";
import Timeout from "@/hooks/timeout";
import AppLayout from "@/layouts/app";
import RouterContext from "@/hooks/router";

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
      <body style={{ overflow: 'auto hidden', fontFamily: 'var(--font-century-gothic)' }}>
        <AntdRegistry>
          <Toast>
            <AppContext>
              <RouterContext>
                <Auth>
                  <Timeout>
                    <AppLayout>
                      {children}
                    </AppLayout>
                  </Timeout>
                </Auth>
              </RouterContext>
            </AppContext>
          </Toast>
        </AntdRegistry>
      </body>
    </html>
  );
}
