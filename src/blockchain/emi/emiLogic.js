import { EMI_CONTRACT_INSTANCE } from "../constants/constant.ts";
import fetchGraphqlData from './fetchLoanRequest.js';
// const { fetchGraphqlData } = require('./fetchLoanRequest')

const allRequesters = async () => {
    return fetchGraphqlData;
}

export const getRequestDetails = async(id) => {
    console.log("INNNNNNNN")
    id = parseInt(id);
    console.log({id})
    return await EMI_CONTRACT_INSTANCE.methods.requests(id).call();
}

export default allRequesters