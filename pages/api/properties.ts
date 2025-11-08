import type { NextApiRequest, NextApiResponse } from "next";
import { PropertyProps } from "@/interfaces";
import { PROPERTY_LISTING_SAMPLE } from "@/constants";

type Data = PropertyProps[] | { error: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    res.status(200).json(PROPERTY_LISTING_SAMPLE);
  } catch {
    res.status(500).json({ error: "Failed to fetch properties" });
  }
}

