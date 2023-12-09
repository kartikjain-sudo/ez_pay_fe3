const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const getPrice = async (token, chain = EvmChain.MUMBAI) => {
  await Moralis.start({
    apiKey: process.env.WEB3_API_KEY,
  });

  const response = await Moralis.EvmApi.token.getTokenPrice({
    token,
    chain,
  });

  return response;
};

export default getPrice;