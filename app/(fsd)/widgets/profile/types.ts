export interface ProfileHeaderWidgetProps {
  /** Ссылка на аватарку пользователя */
  imageUrl: string | null;
  /** Имя пользователя в заголовок */
  name: string;
  /** Идентификатор профиля для ссылок */
  profileId: string;
  /** Индикатор текущего пользователя */
  isCurrentUser?: boolean;
}
