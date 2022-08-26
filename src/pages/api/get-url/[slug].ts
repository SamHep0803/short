// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db/client";

const getUrl = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query["slug"];

  if (!slug || typeof slug !== "string") {
    return res.status(404).json({ message: "provide a slug" });
  }

  const data = await prisma.shortLink.findFirst({
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!data) {
    return res.status(404).json({ message: "slug not found" });
  }

  res.setHeader("Cache-Control", "s-maxage=10000000, stale-while-revalidate");

  return res.json(data);
};

export default getUrl;
