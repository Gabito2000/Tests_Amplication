import { ProyectUpdateManyWithoutUsersInput } from "./ProyectUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  proyects?: ProyectUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  username?: string;
};
