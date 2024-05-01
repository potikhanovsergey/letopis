import {
  ActionIcon,
  AppShell,
  Button,
  Container,
  createTheme,
  CSSVariablesResolver,
  Drawer,
  Menu,
  Modal,
  Timeline,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Nunito_Sans } from "next/font/google";

import AppShellClassNames from "./AppShell.module.css";
import MenuClassNames from "./Menu.module.css";

const font = Nunito_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700"],
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  dark: {
    "--mantine-color-anchor": theme.colors.blue[5],
  },
  light: {
    "--mantine-color-anchor": theme.colors.blue[5],
  },
});

export const theme = createTheme({
  primaryColor: "dark",
  fontFamily: font.style.fontFamily,
  headings: {
    fontFamily: font.style.fontFamily,
  },
  components: {
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: "default",
      },
    }),
    Container: Container.extend({
      defaultProps: {
        size: "xl",
      },
    }),
    Drawer: Drawer.extend({
      defaultProps: {
        lockScroll: false,
      },
      styles: {
        title: {
          fontWeight: 700,
        },
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        centered: true,
        lockScroll: false,
        transitionProps: {
          duration: 300,
        },
      },
      styles: {
        title: {
          fontWeight: 700,
        },
        body: {
          zIndex: 100000
        }
      },
    }),
    Button: Button.extend({
      defaultProps: {
        variant: "default",
        size: "compact-md",
      },
    }),
    DateInput: DateInput.extend({
      defaultProps: {
        locale: "ru",
        hideOutsideDates: true,
      },
    }),
    Menu: Menu.extend({
      classNames: MenuClassNames,
    }),
    AppShell: AppShell.extend({
      classNames: AppShellClassNames,
    }),
    Timeline: Timeline.extend({
      defaultProps: {
        bulletSize: 32,
        color: "gray.3",
      },
    }),
  },
  activeClassName: "",
});
