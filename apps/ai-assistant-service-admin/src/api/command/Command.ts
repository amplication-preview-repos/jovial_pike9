import { Response } from "../response/Response";
import { User } from "../user/User";

export type Command = {
  commandText: string | null;
  createdAt: Date;
  id: string;
  responses?: Array<Response>;
  updatedAt: Date;
  user?: User | null;
};
