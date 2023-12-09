import Web3 from "web3";

const HTTP: string = process.env.HTTP_PROVIDER ? process.env.HTTP_PROVIDER : '';
const HTTP_PROVIDER = new Web3.providers.HttpProvider(HTTP);

const web3_http = new Web3(HTTP_PROVIDER);

export { web3_http };
