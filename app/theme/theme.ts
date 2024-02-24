import {
  ActionIcon,
  AppShell,
  Button,
  ColorInput,
  Container,
  createTheme,
  CSSVariablesResolver,
  InputWrapper,
  Menu,
  Modal,
  NumberInput,
  Paper,
  Popover,
  Select,
  Textarea,
  TextInput,
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
  dark: {},
  light: {},
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
        size: "compact-sm",
        variant: "subtle",
      },
    }),
    NumberInput: NumberInput.extend({
      defaultProps: {
        size: "xs",
      },
    }),
    DateInput: DateInput.extend({
      defaultProps: {
        size: "xs",
        locale: "ru",
        hideOutsideDates: true,
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        size: "xs",
      },
    }),
    Textarea: Textarea.extend({
      defaultProps: {
        size: "xs",
      },
    }),
    ColorInput: ColorInput.extend({
      defaultProps: {
        size: "xs",
      },
    }),
    Select: Select.extend({
      defaultProps: {
        size: "xs",
      },
    }),
    InputWrapper: InputWrapper.extend({
      defaultProps: {
        size: "xs",
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
