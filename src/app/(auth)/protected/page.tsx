import { auth } from "@/auth";
import { Text } from "@chakra-ui/react";

export default async function Page() {
  const session = await auth();
  return <Text>Hello, {session?.user?.email}</Text>;
}
