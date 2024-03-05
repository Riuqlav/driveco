export const fetchChargeBoxes = async () => {
  try {
    const response = await fetch('/src/data/charge-boxes.json');
    const data = await response.json();
    return data.chargeboxes;
  } catch (error) {
    console.error('Error fetching charge boxes:', error);
    return [];
  }
};

export const fetchParameters = async () => {
  try {
    const response = await fetch('/src/data/parameters.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching parameters:', error);
    return {};
  }
};