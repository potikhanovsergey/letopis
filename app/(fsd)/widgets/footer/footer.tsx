import { ThemeSwitcher } from "@/app/(fsd)/features";
import { Logo } from "@/app/components/layout/Logo";
import { Container, Group } from "@mantine/core";
import { FC } from "react";
import classes from "./styles.module.css";

export const FooterWidget: FC = () => {
  return (
    <footer className={classes.footer}>
      <Container py="xs">
        <Group justify="space-between">
          <Logo size={100} />
          <ThemeSwitcher />
        </Group>
      </Container>
    </footer>
  );
};
