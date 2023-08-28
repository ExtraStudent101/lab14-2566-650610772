"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" />
      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      />
      <Button mt="xs" color="orange">
        Submit Review
      </Button>
      <Divider mt="sm" />
      <Group position="center" mt="sm">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly />
      </Group>
      <Text color="dimmed" align="center">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider mt="sm" />
      <Group position="center" mt="sm">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly />
      </Group>
      <Text color="dimmed" align="center">
        My favourite part is pepperoni
      </Text>

      <Pagination position="center" total={20} mt="md" color="orange" />

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Theerapat Lumtan 650610772
      </Text>
    </Container>
  );
}
