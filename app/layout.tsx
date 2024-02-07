import { FC, PropsWithChildren } from "react";
import { ColorSchemeScript } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

import { DatesProvider } from "@/app/providers/DatesProvider";
import { SessionProvider } from "@/app/providers/SessionProvider";
import { StylesProvider } from "@/app/providers/StylesProvider";
import { ZenstackHooksProvider } from "@/app/providers/ZenstackHooksProvider";
import { getSession } from "@/server/utils";

import { Shell } from "./components/Shell";

import "./globals.css";

const Layout: FC<PropsWithChildren> = async ({ children }) => {
  const session = await getSession();

  return (
    <html lang="ru">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <SessionProvider session={session}>
          <ZenstackHooksProvider>
            <StylesProvider>
              <ModalsProvider>
                <DatesProvider>
                  <Shell>{children}</Shell>
                </DatesProvider>
              </ModalsProvider>
            </StylesProvider>
          </ZenstackHooksProvider>
        </SessionProvider>
      </body>
    </html>
  );
};

export default Layout;
