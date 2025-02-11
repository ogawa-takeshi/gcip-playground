import { Provider } from "@/components/ui/provider";
import { Box, Container, Heading, Stack } from "@chakra-ui/react";

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Container maxW="4xl" mt="50px">
            <Stack gap="6" align="flex-start">
              <Heading size="3xl">
                GCIP Authentication w/ Next.js & Auth.js
              </Heading>
              <Box w="100%">{children}</Box>
            </Stack>
          </Container>
        </Provider>
      </body>
    </html>
  );
}
