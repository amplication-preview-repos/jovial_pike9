import { Like } from "../like/Like";
import { JsonValue } from "type-fest";
import { Retweet } from "../retweet/Retweet";

export type User = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  profilePicture: JsonValue;
  retweets?: Array<Retweet>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
