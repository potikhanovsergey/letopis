import { createTheme } from "@mantine/core";

import ComboboxClassNames from "./styles/Combobox.module.css";
import MenuClassNames from "./styles/Menu.module.css";
import PopoverClassNames from "./styles/Popover.module.css";

export const theme = createTheme({
  activeClassName: "",
  components: {
    Menu: {
      classNames: MenuClassNames,
    },
    Combobox: {
      classNames: ComboboxClassNames,
    },
    Popover: { classNames: PopoverClassNames },
  },
});
