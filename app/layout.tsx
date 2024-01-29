import { FC, PropsWithChildren } from "react";
import { AppShell, AppShellMain, ColorSchemeScript } from "@mantine/core";
import { getSession } from "server/utils";

import {
  MantineStylesProvider,
  SessionProvider,
  ZenstackHooksProvider,
} from "./providers";
import { HeaderWidget } from "./widgets";

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
            <MantineStylesProvider>
              <AppShell header={{ height: 40 }}>
                <HeaderWidget />
                <AppShellMain>{children}</AppShellMain>
              </AppShell>
            </MantineStylesProvider>
          </ZenstackHooksProvider>
        </SessionProvider>
      </body>
    </html>
  );
};

export default Layout;
