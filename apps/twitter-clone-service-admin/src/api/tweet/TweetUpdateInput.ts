import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { RetweetUpdateManyWithoutTweetsInput } from "./RetweetUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  author?: string | null;
  likeCount?: number | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  message?: string | null;
  retweets?: RetweetUpdateManyWithoutTweetsInput;
};
