import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ConnectBtn.css';  // Assuming your CSS is in App.css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug } from '@fortawesome/free-solid-svg-icons';

function ConnectBtn() {
  // State to hold the wallet address
  const [walletAddress, setWalletAddress] = useState("");
  // State to manage the visibility of the modal
  const [showModal, setShowModal] = useState(false);
  // State to track if user is already connected
  const [isConnected, setIsConnected] = useState(false);

  // Check if MetaMask is connected on component mount
  useEffect(() => {
    const checkMetaMaskConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsConnected(true);
        }
      }
    };
    checkMetaMaskConnection();
  }, []);

  // Function to request access to the user's MetaMask wallet
  const requestAccount = async () => {
    console.log('Requesting account...');

    // Check if MetaMask extension is installed
    if (window.ethereum) {
      console.log('MetaMask detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        setIsConnected(true); // Set connected status
        setShowModal(false);  // Close the modal
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('MetaMask not detected');
    }
  };

  // Function to handle the connect wallet button click
  const handleConnectClick = async () => {
    if (isConnected) {
      setShowModal(true);
    } else {
      requestAccount();
      setShowModal(true);
    }
  };

  return (
    <div className="App">
      <button  
       className='custom-btn' onClick={handleConnectClick}>Connect Wallet  <FontAwesomeIcon icon={faPlug} /> 
       </button>

    
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{isConnected ? 'MetaMask Connected' : 'MetaMask Login Required'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isConnected ? (
            <p>Wallet Address: {walletAddress}</p>
          ) : (
            <p>You need to login to MetaMask to use this feature.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          {isConnected ? (
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => window.open('https://portfolio.metamask.io', '_blank')}
            >
              Login to MetaMask
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ConnectBtn;
