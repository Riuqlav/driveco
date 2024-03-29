import chargeBoxesData from '../data/charge-boxes.json';
import parametersData from '../data/parameters.json';
import { ChargeBox, Parameters } from '../types/types';

export const getChargeBoxes = (): Promise<ChargeBox[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(chargeBoxesData.chargeboxes as ChargeBox[]);
    }, 1100);
  });
};

export const getParameters = (): Promise<Parameters> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(parametersData);
    }, 1000); // Introduce a delay to simulate API fetch
  });
};