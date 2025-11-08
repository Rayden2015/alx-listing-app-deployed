import Image from "next/image";
import React from "react";

interface BookingDetails {
  propertyName: string;
  startDate: string;
  totalNights: number;
  bookingFee: number;
  price: number;
  imageUrl?: string;
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80";

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => {
  const total = bookingDetails.bookingFee + bookingDetails.price;

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="text-xl font-semibold">Review Order Details</h2>
      <div className="mt-4 flex items-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-md">
          <Image
            src={bookingDetails.imageUrl ?? FALLBACK_IMAGE}
            alt={bookingDetails.propertyName}
            fill
            className="object-cover"
            sizes="128px"
            priority
          />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
          <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
          <p className="text-sm text-gray-500">
            {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between text-sm">
          <p>Booking Fee</p>
          <p>${bookingDetails.bookingFee}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Subtotal</p>
          <p>${bookingDetails.price}</p>
        </div>
        <div className="flex justify-between text-sm font-semibold">
          <p>Grand Total</p>
          <p>${total}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;