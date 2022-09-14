import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xd98bF72e438a8d81a25b709C0c4622ae6DeC4041";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/2zZEOaoTKej-9UU69mPAaobRpv_hTCyg",
  },
};
