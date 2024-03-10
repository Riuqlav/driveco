export const fetchChargeBoxes = async () => {
  try {
    const response = await fetch('https://run.mocky.io/v3/5dee5791-8e27-4736-a745-bcc3a61aaa59');
    const data = await response.json();
    return data.chargeboxes;
  } catch (error) {
    console.error('Error fetching charge boxes:', error);
    return [];
  }
};

// export const fetchParameters = async () => {
//   try {
//     const response = await fetch('https://run.mocky.io/v3/5dee5791-8e27-4736-a745-bcc3a61aaa59');
//     const data = await response.json();
//     return data.parameters;
//   } catch (error) {
//     console.error('Error fetching parameters:', error);
//     return {};
//   }
// };

