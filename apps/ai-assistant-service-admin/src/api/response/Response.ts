import { Command } from "../command/Command";

export type Response = {
  command?: Command | null;
  createdAt: Date;
  id: string;
  responseText: string | null;
  responseType?: "Option1" | null;
  updatedAt: Date;
};
