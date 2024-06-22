import { CommandWhereUniqueInput } from "../command/CommandWhereUniqueInput";

export type ResponseCreateInput = {
  command?: CommandWhereUniqueInput | null;
  responseText?: string | null;
  responseType?: "Option1" | null;
};
