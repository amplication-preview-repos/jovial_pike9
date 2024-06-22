import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  author?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  likeCount?: SortOrder;
  message?: SortOrder;
  updatedAt?: SortOrder;
};
