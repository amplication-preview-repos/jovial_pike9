import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommandListRelationFilter } from "../command/CommandListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  commands?: CommandListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  profilePicture?: JsonFilter;
  username?: StringFilter;
};
