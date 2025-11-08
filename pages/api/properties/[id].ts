import type { NextApiRequest, NextApiResponse } from "next";
import { PropertyProps } from "@/interfaces";
import { PROPERTY_LISTING_SAMPLE } from "@/constants";

type Data = PropertyProps | { error: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Property ID is required" });
    }

    const property = PROPERTY_LISTING_SAMPLE.find(
      (prop) => String(prop.id) === String(id),
    );

    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    res.status(200).json(property);
  } catch {
    res.status(500).json({ error: "Failed to fetch property" });
  }
}

