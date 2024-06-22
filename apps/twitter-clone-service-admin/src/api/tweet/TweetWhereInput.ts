import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { RetweetListRelationFilter } from "../retweet/RetweetListRelationFilter";

export type TweetWhereInput = {
  author?: StringNullableFilter;
  id?: StringFilter;
  likeCount?: IntNullableFilter;
  likes?: LikeListRelationFilter;
  message?: StringNullableFilter;
  retweets?: RetweetListRelationFilter;
};
