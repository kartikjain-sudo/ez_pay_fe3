import Web3 from 'web3';
import emiABI from './emiABI.js';

export const web3Instance = new Web3(
    Web3.givenProvider || "https://endpoints.omniatech.io/v1/matic/mumbai/public"
  );

export const EMI_CONTRACT_ADDRESS = "0x41f13e048F658f8dBbAe7eB7841630A9ec8AaD78"

export const EMI_CONTRACT_INSTANCE =  new web3Instance.eth.Contract(emiABI, EMI_CONTRACT_ADDRESS);