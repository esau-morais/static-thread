import { ThreadsAPI } from "threads-api";
import { env } from "@/lib/env.mjs";

const { USERNAME: username, PASSWORD: password, DEVICE_ID: deviceID } = env;

export const threadsClient = new ThreadsAPI({
  username,
  password,
  deviceID,
});
