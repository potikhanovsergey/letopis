import { ReactNode } from "react";

export interface ObjectInfoEntityProps {
  /* Элемент изображения. Более приоритетный, чем imageUrl */
  imageNode?: ReactNode;
  /* Ссылка на изображение. Менее приоритетна, чем imageNode */
  imageUrl?: string;
  /* Заголовок объекта */
  title: string;
  /* Подпись под заголовком */
  subtitle: string;
}
