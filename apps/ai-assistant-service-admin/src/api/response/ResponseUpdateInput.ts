import { CommandWhereUniqueInput } from "../command/CommandWhereUniqueInput";

export type ResponseUpdateInput = {
  command?: CommandWhereUniqueInput | null;
  responseText?: string | null;
  responseType?: "Option1" | null;
};
