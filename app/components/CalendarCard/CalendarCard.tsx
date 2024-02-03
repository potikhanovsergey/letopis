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

export const CalendarCard: FC<CalendarCardProps> = ({
  title,
  id,
  startDate,
  endDate,
  user,
  updatedAt,
  previewUrl,
}) => {
  const href = useMemo(() => {
    return `/c/${id}` as Route;
  }, [id]);

  return (
    <Card radius="md" withBorder className={classes.card}>
      <Card.Section mb="sm">
        <Link href={href}>
          <Image
            src={previewUrl || "./card-bg.jpg"}
            alt={title}
            style={{ aspectRatio: "16/9" }}
          />
        </Link>
      </Card.Section>
      <Badge size="sm" w="fit-content" variant="light">
        {dayjs(startDate).format("DD.MM.YYYY")} -{" "}
        {dayjs(endDate).format("DD.MM.YYYY")}
      </Badge>
      <Text size="lg" fw={700} mt="xs">
        {title}
      </Text>

      <Group mt="lg" gap="xs">
        <Avatar src={user.image} radius="sm" />
        <div>
          <Text size="sm" fw={500}>
            {user.name}
          </Text>
          <Text fz="xs" c="dimmed">
            Обновлено {dayjs(updatedAt).format("DD.MM.YYYY")}
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
