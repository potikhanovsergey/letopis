"use client";
import { FC, useMemo } from "react";
import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  Group,
  Image,
  rem,
  Text,
} from "@mantine/core";
import { IconShare } from "@tabler/icons-react";
import dayjs from "dayjs";
import { Route } from "next";
import Link from "next/link";

import { CalendarCardProps } from "./CalendarCard.typings";

import classes from "./CalendarCard.module.css";

const now = dayjs(new Date());
const later = now.add(50, "y").add(4, "m").add(12, "d");

export const CalendarCard: FC<CalendarCardProps> = ({ title, id }) => {
  const href = useMemo(() => {
    return `/c/${id}` as Route;
  }, [id]);

  return (
    <Card radius="md" withBorder className={classes.card}>
      <Card.Section mb="sm">
        <Link href={href}>
          <Image
            src="https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
            alt="Top 50 underrated plants for house decoration"
            height={180}
          />
        </Link>
      </Card.Section>
      <Badge size="sm" w="fit-content" variant="light">
        {now.format("DD.MM.YYYY")} - {later.format("DD.MM.YYYY")}
      </Badge>
      <Text fw={700} mt="xs">
        Top 50 underrated plants for house decoration
      </Text>

      <Group mt="lg" gap="xs">
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
          radius="sm"
        />
        <div>
          <Text fw={500}>Elsa Gardenowl</Text>
          <Text fz="xs" c="dimmed">
            posted 34 minutes ago
          </Text>
        </div>
      </Group>
      <Card.Section className={classes.footer}>
        <Group justify="space-between">
          <Button component={Link} href={href}>
            Смотреть
          </Button>
          <Group gap={0}>
            <ActionIcon variant="subtle" color="gray">
              <IconShare
                style={{ width: rem(20), height: rem(20) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
};
