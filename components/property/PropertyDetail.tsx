import React from "react";
import { PropertyProps } from "@/interfaces";

interface PropertyDetailProps {
  property: PropertyProps;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return <div>{property.name}</div>;
}
