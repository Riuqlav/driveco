// Define the ChargeBox type
export interface ChargeBox {
  identifier: string;
  name: string;
  type: string; // Change to specific ChargeBoxType if available
  location: {
    latitude: number;
    longitude: number;
  };
  address: string;
  city: string;
  zipcode: string;
  status: "free" | "in_use" | "booked" | "offline"; // Specify the exact status values
}

// Define the Parameters type
export interface ChargeBoxTypeDetails {
  icon: string;
  picture: string;
  name: string;
}

export interface TranslationStrings {
  "chargebox.status.free": string;
  "chargebox.status.in_use": string;
  "chargebox.status.booked": string;
  "chargebox.status.offline": string;
  "cta.navigate_gmap": string;
  "cta.booking": string;
}

export interface Parameters {
  chargebox_type: Record<string, ChargeBoxTypeDetails>;
  translations: Record<string, TranslationStrings>;
}
