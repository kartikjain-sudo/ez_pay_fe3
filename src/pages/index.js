import React, { useState } from 'react';

// Modal component
const Modal = ({ isOpen, onClose, fileName, location }) => {
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
        <h3>File Details</h3>
        <p>File Name: {fileName}</p>
        <p>Location: {location}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState({ fileName: '', location: '' });

  const items = [
    { fileName: 'File 1', location: 'Location 1' },
    { fileName: 'File 2', location: 'Location 2' },
    { fileName: 'File 3', location: 'Location 3' },
    // Add more items as needed
  ];

  const handleFileClick = (fileName, location) => {
    setSelectedFile({ fileName, location });
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
      {/* Bid Box */}
      <div
        style={{
          border: '1px solid #ccc',
          padding: '20px',
          marginRight: '10px',
          width: '50%', // Set the width as needed
          height: '80vh', // Set the height as needed
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        }}
      >
        {/* Dynamically generate rectangles based on items */}
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              background: '#f0f0f0',
              padding: '10px',
              cursor: 'pointer',
              minWidth: '100px',
              margin: '5px',
            }}
            onClick={() => handleFileClick(item.fileName, item.location)}
          >
            {item.fileName}
          </div>
        ))}
      </div>

      {/* Ask Box */}
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
        {/* Dynamically generate rectangles based on items */}
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              background: '#f0f0f0',
              padding: '10px',
              cursor: 'pointer',
              minWidth: '100px',
              margin: '5px',
            }}
            onClick={() => handleFileClick(item.fileName, item.location)}
          >
            {item.fileName}
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        fileName={selectedFile.fileName}
        location={selectedFile.location}
      />
    </div>
  );
};

export default Home;
