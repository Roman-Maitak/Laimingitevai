export type ServiceModel = {
  id: string;
  name: string;
  description: string;
  icon: ServiceIcon;
  image: string;
};

export enum ServiceIcon {
  TRUCK = "TRUCK",
  CAR = "CAR",
  TRANSFER = "TRANSFER",
  GOODS = "GOODS",
}
