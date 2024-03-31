import { FC } from "react";
import { Container, Title } from "@mantine/core";
import { FeedWidget } from "@/app/(fsd)/widgets";

const HomePage: FC = async () => {
  return (
    <Container>
      <Title mt={80} mb={40} ta="center" maw={800} mx="auto" size={48}>
        Находите интересные Вам календари в этой ленте.
      </Title>
      <FeedWidget />
    </Container>
  );
};

export default HomePage;
