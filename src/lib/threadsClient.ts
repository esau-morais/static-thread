import { Client } from "@threadsjs/threads.js";
import { env } from "@/lib/env.mjs";

export const threadsClient = new Client({ token: env.TOKEN });
