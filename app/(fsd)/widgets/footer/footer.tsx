import { ThemeSwitcher } from "@/app/(fsd)/features";
import { Logo } from "@/app/components/layout/Logo";
import { Group } from "@mantine/core";
import { FC } from "react";
import classes from "./styles.module.css";

export const FooterWidget: FC = () => {
  return (
    <footer className={classes.footer}>
      <Group justify="space-between">
        <Logo size={128} />
        <ThemeSwitcher />
      </Group>
    </footer>
  );
};
