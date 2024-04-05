import { ChargeBox, Parameters } from '../types/types';

const CHARGEBOX_API_URL = 'https://run.mocky.io/v3/5dee5791-8e27-4736-a745-bcc3a61aaa59';
const PARAMETERS_API_URL = 'https://run.mocky.io/v3/5a699583-9dc5-46a1-8888-52feb04a3dab';

export const getChargeBoxes = async (): Promise<ChargeBox[]> => {
  try {
    const response = await fetch(CHARGEBOX_API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    return data.chargeboxes;
  } catch (error) {
    console.error('Error fetching charge boxes:', error);
    throw error;
  }
};

export const getParameters = async (): Promise<Parameters> => {
  try {
    const response = await fetch(PARAMETERS_API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching parameters:', error);
    throw error;
  }
};