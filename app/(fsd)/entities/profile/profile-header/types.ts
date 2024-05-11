import { ReactNode } from "react";

export interface ProfileHeaderProps {
  /** Ссылка на картинку справа */
  imageUrl?: string;
  /** Заголовок в средней секции */
  title: string;
  /** Компонент под заголовком в средней секции */
  subtitle?: ReactNode;
  /** Компонент в правой секции */
  rightSection?: ReactNode;
}
