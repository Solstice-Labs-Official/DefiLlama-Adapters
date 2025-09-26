const { getConnection, decodeAccount } = require("../helper/solana");
const { PublicKey } = require("@solana/web3.js");
const ADDRESSES = require('../helper/coreAssets.json');

const USDT_DEPOSITORY = "7vKMWhD1CUFFPr3NoxqVqicPcuV1HDXtEPRFzf6PYrEG";
const USDC_DEPOSITORY = "Z3VTSEugXddmomZ2BGkyNZtJd6wPPr4G6EME1xCWnjb";

module.exports = {
  timetravel: false,
  methodology: "Total USDT and USDC under management",
  solana: {
    tvl,
  },
};

async function getDepositoryTvl(address) {
  const connection = getConnection()
  const depository = await connection.getAccountInfo(new PublicKey(address));
  const decoded = decodeAccount('usxProgram', depository);

  return decoded.collateralUnderManagement.toString()
}

async function tvl(api) {
  const usdtUnderManagement = await getDepositoryTvl(USDT_DEPOSITORY);
  const usdcUnderManagement = await getDepositoryTvl(USDC_DEPOSITORY);
  api.add(ADDRESSES.solana.USDT, usdtUnderManagement);
  api.add(ADDRESSES.solana.USDC, usdcUnderManagement);

  return api.getBalances()
}
