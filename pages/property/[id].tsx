import PropertyDetail from "@/components/property/PropertyDetail";
import { PROPERTY_LISTING_SAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;

      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const endpoint = baseUrl
        ? `${baseUrl.replace(/\/$/, "")}/properties/${id}`
        : `/api/properties/${id}`;

      try {
        const response = await axios.get<PropertyProps>(endpoint, { timeout: 4000 });
        setProperty(response.data);
      } catch (error) {
        console.warn("Falling back to bundled property:", error);
        const fallbackProperty = PROPERTY_LISTING_SAMPLE.find(
          (item) => String(item.id) === String(id)
        );
        setProperty(fallbackProperty ?? null);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p className="p-8 text-center text-gray-500">Loading...</p>;
  }

  if (!property) {
    return <p className="p-8 text-center text-gray-500">Property not found</p>;
  }

  return <PropertyDetail property={property} />;
}
