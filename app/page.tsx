import { FC } from "react";
import { Container, Title } from "@mantine/core";
import { FeedWidget } from "@/app/(fsd)/widgets";

const HomePage: FC = async () => {
  return (
    <Container>
      <Title mt={20} mb={40} ta="center" maw={800} mx="auto" size={32}>
        Готовые календари от других пользователей
      </Title>
      <FeedWidget />
    </Container>
  );
};

export default HomePage;
