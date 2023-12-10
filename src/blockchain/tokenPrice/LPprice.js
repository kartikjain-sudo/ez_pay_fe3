import BigNumber from "bignumber.js";
import poolABI from "../constants/poolABI";
import { web3Instance } from "../constants/constant";
import { getPrice } from "../constants/usdPrice";

let instance;

export const isLPtoken = async(address) => {
    instance = new web3Instance.eth.Contract(poolABI, address);

    try {
        await instance.methods.getReserves().call();
        return true;
    } catch (e) {
        return false;
    }
}

export const getLPvalue = async (address, amount) => {
  try {
    const valid = await isLPtoken(address);
    if (valid) {
        instance = new web3Instance.eth.Contract(poolABI, address);
        try {
            const totalLpTokens = await instance.methods.totalSupply().call();
            const totalReserves = await instance.methods.getReserves().call();
            const token0 = await instance.methods.token0().call();
            const token1 = await instance.methods.token1().call();

            const token0Price = getTokenPrice(token0);
            const token1Price = getTokenPrice(token1);

            const token0Value = BigNumber.from(token0Price).mul(totalReserves._reserve0);
            const token1Value = BigNumber.from(token1Price).mul(totalReserves._reserve1);

            const poolValue = BigNumber.from(token0Value).add(token1Value);

            const lpTokenPrice = BigNumber.from(poolValue).div(totalLpTokens);

            return lpTokenPrice;

        } catch (e) {
            console.error(e)
        }
    }
  } catch (error) {}
};

export const getTokenPrice = async (address) => {
    return await getPrice(address);
}

export const getLpTokenBalance = async (address) => {
  try {
    instance = new web3Instance.eth.Contract(poolABI, address);
    const balanceInWei = await instance.methods
      .balanceOf(address).call();
    const decimals = await instance.methods.decimals().call();
    const balance = balanceInWei / Math.pow(10, decimals);

    console.log("usdc balanceInWei, balance", balanceInWei, balance);

    return balance;
  } catch (error) {}
};