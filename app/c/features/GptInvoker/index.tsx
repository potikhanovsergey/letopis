import { GptPromptForm } from "@/app/c/features/GptPromptForm";
import { IconButton } from "@/app/components/IconButton";
import { modals } from "@mantine/modals";
import { IconWand } from "@tabler/icons-react";
import { FC, useCallback } from "react";

const TITLE = "Автозаполнение календаря"

export const GptInvoker: FC = () => {
  const handleClick = useCallback(() => {
    modals.open({
      title: TITLE,
      id: "gpt-prompt",
      size: "lg",
      children: (
        <GptPromptForm />
      ),
    });
  }, []);
    
  return (
    <IconButton variant="gradient" gradient={{ from: "violet", to: "orange", deg: 30 }} onClick={handleClick} icon={IconWand} label={TITLE} />
  )
}