import {
  ActionIcon,
  Button,
  createTheme,
  Modal,
  NumberInput,
  Textarea,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Nunito_Sans } from "next/font/google";

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
    Tooltip: Tooltip.extend({
      defaultProps: {
        radius: "xl",
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        centered: true,
        lockScroll: false,
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
  },
  activeClassName: "",
});
