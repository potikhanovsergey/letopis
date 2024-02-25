"use client";
import { FC, useMemo } from "react";
import { Avatar, Badge, Button, Card, Group, Text } from "@mantine/core";
import { Route } from "next";
import Link from "next/link";

import { CalendarPreviewImage } from "@/app/components/CalendarPreviewImage";
import {
  BookmarkButtonFeature,
  ShareCalendarFeature,
} from "@/app/features/calendar/common";
import { formatShort } from "@/app/utils/date";

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
          <CalendarPreviewImage alt={title} src={previewUrl} />
        </Link>
      </Card.Section>
      <Badge size="sm" w="fit-content" variant="light">
        {formatShort(startDate)} - {formatShort(endDate)}
      </Badge>
      <Text className={classes.title} size="lg">
        {title}
      </Text>

      <Group mt="md" gap="xs">
        <Avatar src={user.image} radius="sm" />
        <div>
          <Text size="sm" fw={500}>
            {user.name}
          </Text>
          <Text fz="xs" c="dimmed">
            Обновлено {formatShort(updatedAt)}
          </Text>
        </div>
      </Group>
      <Card.Section className={classes.footer}>
        <Group justify="space-between">
          <Button variant="light" component={Link} href={href}>
            Смотреть
          </Button>
          <Group gap={0}>
            <BookmarkButtonFeature id={id} />
            <ShareCalendarFeature id={id} />
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
};
