import { createUser } from "slices/auth/api";

export interface SignupFormFeatureProps {
  /* Server Action, который создает пользователя */
  createUserAction: typeof createUser;
}
