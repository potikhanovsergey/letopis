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
  Paper,
  Popover,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Nunito_Sans } from "next/font/google";

import AppShellClassNames from "./AppShell.module.css";
import MenuClassNames from "./Menu.module.css";
import PaperClassNames from "./Paper.module.css";
import PopoverClassNames from "./Popover.module.css";

const font = Nunito_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700"],
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--lightgray": theme.other.lightgray,
  },
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
  other: {
    lightgray: "rgba(25, 25, 25, 0.05)",
  },
  components: {
    Popover: Popover.extend({
      classNames: PopoverClassNames,
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: "subtle",
      },
    }),
    Container: Container.extend({
      defaultProps: {
        size: "xl",
      },
    }),
    Paper: Paper.extend({
      classNames: PaperClassNames,
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
      },
    }),
    Button: Button.extend({
      defaultProps: {
        variant: "subtle",
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
  },
  activeClassName: "",
});
