"use client";
/* Глобальные стили, должны быть в самом начале */
import { FC, PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "app/theme";

import "@mantine/core/styles/global.layer.css";
/* Компоненты, которые переиспользуются в других компонентах Mantine */
import "@mantine/core/styles/ScrollArea.layer.css";
import "@mantine/core/styles/UnstyledButton.layer.css";
import "@mantine/core/styles/VisuallyHidden.layer.css";
import "@mantine/core/styles/Paper.layer.css";
import "@mantine/core/styles/Popover.layer.css";
import "@mantine/core/styles/CloseButton.layer.css";
import "@mantine/core/styles/Group.layer.css";
import "@mantine/core/styles/Loader.layer.css";
import "@mantine/core/styles/Overlay.layer.css";
import "@mantine/core/styles/ModalBase.layer.css";
import "@mantine/core/styles/Input.layer.css";
import "@mantine/core/styles/Flex.layer.css";
/* Индивидуальные компоненты */
import "@mantine/core/styles/Text.layer.css";
import "@mantine/core/styles/ActionIcon.layer.css";
import "@mantine/core/styles/Title.layer.css";
import "@mantine/core/styles/Button.layer.css";
import "@mantine/core/styles/Stack.layer.css";
import "@mantine/core/styles/Container.layer.css";
import "@mantine/core/styles/Center.layer.css";
import "@mantine/core/styles/PasswordInput.layer.css";
import "@mantine/core/styles/Anchor.layer.css";
import "@mantine/core/styles/AppShell.layer.css";
import "@mantine/core/styles/Menu.layer.css";
import "@mantine/core/styles/Avatar.layer.css";
import "@mantine/core/styles/Combobox.layer.css";

export const MantineStylesProvider: FC<PropsWithChildren> = ({ children }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
