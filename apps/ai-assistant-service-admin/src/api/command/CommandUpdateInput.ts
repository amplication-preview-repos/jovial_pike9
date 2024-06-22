import { ResponseUpdateManyWithoutCommandsInput } from "./ResponseUpdateManyWithoutCommandsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommandUpdateInput = {
  commandText?: string | null;
  responses?: ResponseUpdateManyWithoutCommandsInput;
  user?: UserWhereUniqueInput | null;
};
