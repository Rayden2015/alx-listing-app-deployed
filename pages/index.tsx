import PropertyCard from "@/components/property/PropertyCard";
import { PROPERTY_LISTING_SAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const FALLBACK_PROPERTIES = PROPERTY_LISTING_SAMPLE;

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const endpoint = baseUrl
        ? `${baseUrl.replace(/\/$/, "")}/properties`
        : "/api/properties";

      try {
        const response = await axios.get<PropertyProps[]>(endpoint, { timeout: 4000 });
        setProperties(response.data.length ? response.data : FALLBACK_PROPERTIES);
      } catch (error) {
        console.warn("Falling back to bundled listings:", error);
        setProperties(FALLBACK_PROPERTIES);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p className="p-8 text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id ?? property.name} property={property} />
      ))}
      <SpeedInsights />
    </div>
  );
}
