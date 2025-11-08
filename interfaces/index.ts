import { ReactNode } from "react";
export interface LayoutProps {
  children: ReactNode;
}
export interface CardProps {
  title: string;
  image: string;
  location: string;
  price: string;
}
export interface PillProps{
  title: string;
  image?: string;
}
export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface PropertyProps {
    name:     string;
    address:  Address;
    rating:   number;
    category: string[];
    price:    number;
    offers:   Offers;
    image:    string;
    discount?: string;
}

export interface Address {
    state:   string;
    city:    string;
    country: string;
}

export interface Offers {
    bed:       string;
    shower:    string;
    occupants: string;
}

export interface Review {
  id: string;
  comment: string;
}

export interface BookingDetails {
  propertyName: string;
  startDate: string;
  totalNights: number;
  bookingFee: number;
  price: number;
}
