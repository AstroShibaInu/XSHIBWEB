import axios from 'axios';

const getStellarBalance = async (walletAddress, assetCode) => {
  const horizonURL = `https://horizon.stellar.org/accounts/${walletAddress}`;

  try {
    const response = await axios.get(horizonURL);
    const xshibBalance = response.data.balances.find(
      (asset) => asset.asset_code === assetCode
    )?.balance;

    if (xshibBalance !== undefined) {
      return parseFloat(xshibBalance);
    } else {
      throw new Error('XSHIB balance not found for the specified asset code.');
    }
  } catch (error) {
    console.error('Error fetching XSHIB balance:', error.message);
    throw error;
  }
};

export default getStellarBalance;
