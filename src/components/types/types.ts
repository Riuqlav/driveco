export interface Location {
  latitude: number;
  longitude: number;
}

export interface UserLocation extends Location {
  accuracy: number;
}

export interface ChargeBox {
  identifier: string;
  name: string;
  type: ChargeBoxType;
  location: Location;
  address: string;
  city: string;
  zipcode: string;
  status: ChargeBoxStatus;
}

export type ChargeBoxType = "kino_pro" | "kino_one" | "kino_urban";

export type ChargeBoxStatus = "free" | "in_use" | "booked" | "offline";

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
  chargebox_type: Record<ChargeBoxType, ChargeBoxTypeDetails>;
  translations: Record<string, TranslationStrings>;
}

export interface ChargeBoxesResponse {
  chargeboxes: ChargeBox[];
}
