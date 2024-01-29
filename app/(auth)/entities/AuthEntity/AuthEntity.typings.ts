import { ReactNode } from "react";

export interface AuthEntityProps {
  /** Заголовок внутри страницы авторизации */
  title: string;
  /** Место для фичи формы */
  form: ReactNode;
  /** Место для нижней части авторизации */
  bottomNode: ReactNode;
}
