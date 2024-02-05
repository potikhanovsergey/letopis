import {
  ActionIcon,
  Button,
  ColorInput,
  Container,
  createTheme,
  Menu,
  Modal,
  NumberInput,
  Select,
  Textarea,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Nunito_Sans } from "next/font/google";

import MenuClassNames from "./Menu.module.css";

const font = Nunito_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700"],
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
        variant: "subtle",
      },
    }),
    Container: Container.extend({
      defaultProps: {
        size: "xl",
      },
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        radius: "xl",
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        centered: true,
        lockScroll: false,
        transitionProps: {
          duration: 400,
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
        variant: "light",
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
    Menu: Menu.extend({
      classNames: MenuClassNames,
    }),
  },
  activeClassName: "",
});
