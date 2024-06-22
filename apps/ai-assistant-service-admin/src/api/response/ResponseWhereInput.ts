import { CommandWhereUniqueInput } from "../command/CommandWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ResponseWhereInput = {
  command?: CommandWhereUniqueInput;
  id?: StringFilter;
  responseText?: StringNullableFilter;
  responseType?: "Option1";
};
