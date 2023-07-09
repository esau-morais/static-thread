import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    TOKEN: z.string().min(1),
  },
  runtimeEnv: process.env,
});
