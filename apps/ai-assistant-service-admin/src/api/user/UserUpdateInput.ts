import { CommandUpdateManyWithoutUsersInput } from "./CommandUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bio?: string | null;
  commands?: CommandUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  profilePicture?: InputJsonValue;
  roles?: InputJsonValue;
  username?: string;
};
