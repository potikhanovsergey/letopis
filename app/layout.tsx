import { FC, PropsWithChildren } from "react";
import { AppShell, AppShellMain, Box, ColorSchemeScript } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

import { HeaderFeature } from "@/app/features/HeaderFeature";
import { DatesProvider } from "@/app/providers/DatesProvider";
import { SessionProvider } from "@/app/providers/SessionProvider";
import { StylesProvider } from "@/app/providers/StylesProvider";
import { ZenstackHooksProvider } from "@/app/providers/ZenstackHooksProvider";
import { getSession } from "@/server/utils";

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
                  <AppShell header={{ height: 40 }}>
                    <HeaderFeature />
                    <AppShellMain>
                      <Box pt="xl" pb={80}>
                        {children}
                      </Box>
                    </AppShellMain>
                  </AppShell>
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
