import { Button, Fieldset, Input } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { signIn } from "@/auth";

export default function Page() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData);
      }}
    >
      <Fieldset.Root maxW="md">
        <Fieldset.Content>
          <Field label="Email address">
            <Input name="email" type="email" />
          </Field>
          <Field label="Password">
            <Input name="password" type="password" />
          </Field>
        </Fieldset.Content>
        <Button type="submit" alignSelf="flex-start">
          Sign-in
        </Button>
      </Fieldset.Root>
    </form>
  );
}
