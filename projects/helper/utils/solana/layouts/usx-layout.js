const {
  struct, u8, seq, blob, publicKey, u64, u128, 
} = require('./layout-base')

const USX_STABLE_DEPOSITORY_LAYOUT = struct([
  blob(8),
  u8(),
  u8(),
  publicKey("collateralMint"),
  u8("collateralMintDecimals"),
  publicKey("collateralVault"),
  u8(),
  u128(),
  u128("collateralUnderManagement"),
  u128("redeemableAmountUnderManagement"),
  u128(),
  u8(),
  u8(),
  seq(u8(), 32),
  u64(),
  u64(),
  seq(u8(), 512),
])

module.exports = {
  USX_STABLE_DEPOSITORY_LAYOUT
}