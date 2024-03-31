import { FC, useCallback } from "react";
import { Button } from "@mantine/core";
import { signIn } from "next-auth/react";
import { Icon } from "@/app/components/Icon";
import { IconBrandGoogle } from "@tabler/icons-react";

export const GoogleButtonFeature: FC = () => {
  const handleClick = useCallback(() => {
    signIn("google");
  }, []);

  return (
    <Button leftSection={<Icon As={IconBrandGoogle} />} onClick={handleClick}>
      Google
    </Button>
  );
};
