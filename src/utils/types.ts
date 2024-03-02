type GeoLocation = {
  latitude: number;
  longitude: number;
};

type ChargeBoxStatus = "free" | "in_use" | "booked" | "offline";
type ChargeBoxType = "kino_pro" | "kino_one" | "kino_urban";

type ChargeBox = {
  identifier: string;
  name: string;
  type: ChargeBoxType;
  location: GeoLocation;
  address: string;
  city: string;
  zipcode: string;
  status: ChargeBoxStatus;
};

type ChargeBoxesResponse = {
  chargeboxes: ChargeBox[];
};

type ChargeBoxParameters = {
  icon: string;
  picture: string;
  name: string;
};

type ChargeBoxTypeParameters = {
  [key in ChargeBoxType]: ChargeBoxParameters;
};

type ParametersResponse = {
  chargebox_type: ChargeBoxTypeParameters;
};
