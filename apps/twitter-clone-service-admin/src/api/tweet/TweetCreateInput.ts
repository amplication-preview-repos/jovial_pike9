import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";
import { RetweetCreateNestedManyWithoutTweetsInput } from "./RetweetCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  author?: string | null;
  likeCount?: number | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  message?: string | null;
  retweets?: RetweetCreateNestedManyWithoutTweetsInput;
};
