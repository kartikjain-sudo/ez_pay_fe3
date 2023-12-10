const axios = require('axios');

const graphqlEndpoint = 'https://api.thegraph.com/subgraphs/name/kartikjain-sudo/ez-pay';

// const query = `
//   query {
//     loanRequesteds {
//         id
//         blockNumber
//         blockTimestamp
//         borrower
//         requester
//         transactionHash
//     }
//   }
// `;

// const res = await axios.post(graphqlEndpoint, { query })
//   // .then(response => {
//   //   console.log(response.data.data);
//   // })
//   // .catch(error => {
//   //   console.error('Error:', error.message);
//   // });

//   export default res;

const fetchGraphqlData = async () => {
  const query = `
    query {
      loanRequesteds {
        id
        blockNumber
        blockTimestamp
        borrower
        requester
        transactionHash
      }
    }
  `;

  try {
    const response = await axios.post(graphqlEndpoint, { query });
    console.log({response})
    return response.data.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// async function temp() {

//   console.log(await fetchGraphqlData())
// }

// temp()

export default fetchGraphqlData;
