export type GeoLocation = {
  latitude: number;
  longitude: number;
};

export type ChargeBoxStatus = "free" | "in_use" | "booked" | "offline";
export type ChargeBoxType = "kino_pro" | "kino_one" | "kino_urban";

export type ChargeBox = {
  identifier: string;
  name: string;
  type: ChargeBoxType;
  location: GeoLocation;
  address: string;
  city: string;
  zipcode: string;
  status: ChargeBoxStatus;
  distance: number;
  availability: string;
  selected: boolean;
};

export type ChargeBoxesResponse = {
  chargeboxes: ChargeBox[];
};

export type ChargeBoxParameters = {
  icon: string;
  picture: string;
  name: string;
};

export type ChargeBoxTypeParameters = {
  [key in ChargeBoxType]: ChargeBoxParameters;
};

export type ParametersResponse = {
  chargebox_type: ChargeBoxTypeParameters;
};
