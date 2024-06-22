import { ResponseCreateNestedManyWithoutCommandsInput } from "./ResponseCreateNestedManyWithoutCommandsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommandCreateInput = {
  commandText?: string | null;
  responses?: ResponseCreateNestedManyWithoutCommandsInput;
  user?: UserWhereUniqueInput | null;
};
