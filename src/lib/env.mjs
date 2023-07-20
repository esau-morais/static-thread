import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    USERNAME: z.string().min(1),
    PASSWORD: z.string().min(1),
    // only needed if using 2FA
    DEVICE_ID: z.string().optional()
  },
  runtimeEnv: process.env,
});
