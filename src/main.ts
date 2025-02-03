import type { Env } from "./Env";
import { getConnection } from "./getConnection";
import { initConnection } from "./initConnection";

// Main function to start the service
export const main = async () => {
  await getConnection();
};
