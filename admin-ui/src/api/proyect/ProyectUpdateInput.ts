import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProyectUpdateInput = {
  description?: string | null;
  name?: string | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput;
};
