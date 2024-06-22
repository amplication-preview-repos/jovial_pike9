import { Like } from "../like/Like";
import { Retweet } from "../retweet/Retweet";

export type Tweet = {
  author: string | null;
  createdAt: Date;
  id: string;
  likeCount: number | null;
  likes?: Array<Like>;
  message: string | null;
  retweets?: Array<Retweet>;
  updatedAt: Date;
};
