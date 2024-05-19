import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Flag from 'react-country-flag';
import { ethers } from 'ethers';
import './Becomepartner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function BecomePartner() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConnectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        setIsConnected(true);
      } else {
        throw new Error('MetaMask not detected');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSnackbarClose = () => {
    setError('');
  };

  return (
    <>
    <div className='connect-bg'>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div>
              <img className='btc-img1' src="./images/btc.png" alt="" />
              <img className='btc-img2' src="./images/btc2.png" alt="" />

            </div>
          <h1 className='my-4 connect-h1  text-center text-white'>
              Become a <span className='connect-text'>Partner</span>
            </h1>
            <p className='p-connect'>Invest and manage all your NFTs at one place.</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
  className='btn-connect'
  variant="outlined"
  onClick={handleClickOpen}
  endIcon={<FontAwesomeIcon icon={faArrowRight} />}
  style={{
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    paddingBottom: '.5rem',
    paddingTop: '.5rem',
    backgroundColor: 'rgb(176, 211, 87)',
    color: 'black',
    fontWeight: 'bold',
    borderRadius: '20px'

  }}
>
Get started

</Button>

    </div>
    <div>
              <img className='btc-img1 my-4' src="./images/btc3.png" alt="" />
              <img className='btc-img2' src="./images/btc4.png" alt="" />

            </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
           
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone:', phone);
            handleClose();
          },
        }}
      >
        <DialogTitle>Partner Registration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the following information to become a partner:
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="Production House Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{ style: { color: 'black' } }}
          />
          <TextField
            required
            margin="dense"
            id="email"
            label="Production House Email"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{ style: { color: 'black' } }}
          />
          <PhoneInput
            international
            defaultCountry="US"
            value={phone}
            onChange={setPhone}
            inputProps={{
              required: true,
              style: { color: 'black', marginTop: '16px', width: '100%' },
            }}
            flagsComponent={({ countryCode }) => (
              <Flag countryCode={countryCode} style={{ marginRight: '8px' }} />
            )}
          />
          <Button
            onClick={handleConnectWallet}
            variant="outlined"
            style={{ color: 'black', marginTop: '16px' }}
          >
            {isConnected ? `Connected Wallet: ${walletAddress}` : 'Connect Wallet'}
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={!!error} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="error">
          {error}
        </MuiAlert>
      </Snackbar>
          </div>
        </div>
      </div>
    </div>
     
    </>
  );
}
