import React, { useEffect, useState } from 'react';
import getRequestDetails from "../blockchain/emi/emiLogic";
// import fetchGraphqlData from '../blockchain/emi/fetchLoanRequest';
import BigNumber from 'bignumber';
import axios from 'axios';
import { hexToBigInt } from 'viem';

// Modal component
const Modal = ({ isOpen, onClose, requester, blockTimestamp }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <h3>Request Details</h3>
        <p>Requester Address: {requester}</p>
        <p>blockTimestamp: {blockTimestamp}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const fetchGraphqlData = async () => {

  const graphqlEndpoint = 'https://api.thegraph.com/subgraphs/name/kartikjain-sudo/ez-pay';
  
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

      return response.data.data;
    } catch (error) {
      console.error('Error:', error.message);
      throw error;
    }
  };

  const borrowerList = [];
  const lenderList = [];
  const dataCheck = {};

const Home = () => {
  const [data, setData] = useState(null);
  // const [requestData, setRequestData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState({ requester: '', blockTimestamp: '' });

  const requesters = async () => {
    try {
      const fetchedData = await fetchGraphqlData();
      for (let i=0; i<fetchedData.loanRequesteds.length; i++) {
        if (dataCheck[hexToBigInt(fetchedData.loanRequesteds[i].id)] == 1) {
          continue
        }
        fetchedData.loanRequesteds[i].id = hexToBigInt(fetchedData.loanRequesteds[i].id)
        if (fetchedData.loanRequesteds[i].borrower) {
          borrowerList.push(fetchedData.loanRequesteds[i]);
        } else {
          lenderList.push(fetchedData.loanRequesteds[i])
        }
        dataCheck[hexToBigInt(fetchedData.loanRequesteds[i].id)] = 1;
      }

      setData(fetchedData.loanRequesteds); // Update the state with the fetched data
    } catch (error) {
      // Handle error if needed
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    requesters()
  }, []);

  const handleFileClick = (requester, id) => {
    setSelectedFile({ requester, id });
    setModalOpen(true);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      
      <div
        style={{
          border: '1px solid #ccc',
          padding: '20px',
          marginRight: '10px',
          width: '50%',
          height: '80vh',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        }}
      >
        <p> Buyers </p>
        {borrowerList.map((item, index) => (
          <div
            key={index}
            style={{
              background: '#90EE90',
              padding: '10px',
              cursor: 'pointer',
              minWidth: '100px',
              margin: '5px',
            }}
            onClick={() => handleFileClick(item.requester, item.id)}
          >
            {item.requester}
          </div>
        ))}
      </div>

      
      <div
        style={{
          border: '1px solid #ccc',
          padding: '20px',
          width: '50%', // Set the width as needed
          height: '80vh', // Set the height as needed
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        }}
      >
        <p>Sellers</p>
        {lenderList.map((item, index) => (
          <div
            key={index}
            style={{
              background: '#FF7F7F',
              padding: '10px',
              cursor: 'pointer',
              minWidth: '100px',
              margin: '5px',
            }}
            onClick={() => handleFileClick(item.requester, item.blockTimestamp)}
          >
            {item.requester}
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        requester={selectedFile.requester}
        blockTimestamp={selectedFile.blockTimestamp}
      />
    </div>
  );
};

export default Home;
