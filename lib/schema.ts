import { z } from "zod";

export const authSchema = z.object({
  name: z
    .string({ required_error: "This field is require" })
    .min(2, "Name must be at least 2 characters")
    .max(40, "Name must be at most 40 characters")
    .regex(/^[a-zA-Z]+$/, "Name must contain only letters (a-z, A-Z)")
    .trim(),
  username: z
    .string({ required_error: "This field is require" })
    .min(2, "Username must be at least 2 characters")
    .max(40, "Username must be at most 40 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username must contain only letters, numbers, or underscores"
    )
    .trim(),
  password: z
    .string({ required_error: "This field is require" })
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must be at most 50 characters")
    .regex(/\d/, "Password must include at least 1 digit")
    .regex(/[a-zA-Z]/, "Password must include at least 1 letter")
    .trim(),
});
