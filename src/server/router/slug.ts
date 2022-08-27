import { createRouter } from "./context";
import { z } from "zod";
import { prisma } from "@/server/db/client";

export const slugRouter = createRouter().query("validSlug", {
  input: z.object({
    slug: z.string(),
  }),
  async resolve({ input }) {
    const count = await prisma.shortLink.count({
      where: {
        slug: input.slug,
      },
    });
    return { valid: !(count > 0) };
  },
});
