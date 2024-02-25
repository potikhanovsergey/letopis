import { Box, BoxProps, Group, Textarea, Title, Button } from "@mantine/core";
import { useSession } from "next-auth/react";
import { FC } from "react";

const CalendarComponents: FC<BoxProps> = (props) => {
  const { data: session } = useSession();

  const disabled = !session?.user;

  return (
    <Box {...props}>
      <Title order={2}>Комментарии</Title>
      <Textarea
        minRows={4}
        autosize
        maxRows={12}
        disabled={disabled}
        label="Оставить комментарий"
      />
      <Group justify="flex-end">
        <Button disabled={disabled} size="compact-sm" variant="filled" mt="sm">
          Отправить
        </Button>
      </Group>
    </Box>
  );
};

export default CalendarComponents;
