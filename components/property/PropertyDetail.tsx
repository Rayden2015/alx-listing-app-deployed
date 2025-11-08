import Button from "@/components/common/Button";
import Pill from "@/components/common/Pill";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const router = useRouter();

  const { name, address, rating, category, price, offers, image, discount } = property;

  const discountedPrice = discount ? price - (price * parseFloat(discount)) / 100 : null;

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);

  const handleBookNow = () => {
    router.push(`/booking?propertyId=${property.id}`);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 70vw, 100vw"
          priority
        />
        {discount && (
          <div className="absolute right-4 top-4 rounded-full bg-red-500 px-4 py-2 text-lg font-semibold text-white">
            -{discount}%
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">{name}</h1>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <svg className="h-5 w-5 fill-current text-yellow-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="text-lg font-semibold">{rating}</span>
              </div>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600">
                {address.city}, {address.state}, {address.country}
              </span>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {category.map((cat, index) => (
                <Pill key={index} label={cat} />
              ))}
            </div>
          </div>

          <hr className="my-6" />

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-semibold">About this property</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-100 p-3">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Bedrooms</p>
                  <p className="text-lg font-semibold">{offers.bed}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-100 p-3">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Bathrooms</p>
                  <p className="text-lg font-semibold">{offers.shower}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-100 p-3">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Guests</p>
                  <p className="text-lg font-semibold">{offers.occupants}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-semibold">Description</h2>
            <p className="leading-relaxed text-gray-700">
              Experience luxury and comfort in this beautiful {name.toLowerCase()}. Located in the heart of{" "}
              {address.city}, {address.state}, this property offers an unforgettable stay with all modern amenities.
              Perfect for {offers.occupants} guests, featuring {offers.bed} bedrooms and {offers.shower} bathrooms.
              Book your stay today!
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8 rounded-lg border bg-white p-6 shadow-lg">
            <div className="mb-4">
              {discountedPrice ? (
                <div>
                  <span className="text-3xl font-bold text-gray-900">{formatPrice(discountedPrice)}</span>
                  <span className="ml-2 text-lg text-gray-500 line-through">{formatPrice(price)}</span>
                  <p className="mt-1 text-sm font-semibold text-red-600">
                    Save {formatPrice(price - discountedPrice)}!
                  </p>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-900">{formatPrice(price)}</span>
              )}
              <p className="mt-1 text-gray-600">per night</p>
            </div>

            <Button text="Book Now" onClick={handleBookNow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
