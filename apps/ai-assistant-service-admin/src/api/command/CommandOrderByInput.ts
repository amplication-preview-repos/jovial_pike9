import { SortOrder } from "../../util/SortOrder";

export type CommandOrderByInput = {
  commandText?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
