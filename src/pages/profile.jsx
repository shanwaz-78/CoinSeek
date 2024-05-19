import React from 'react'
import { CryptoState } from '../cryptoContext'
import CryptoWatchlist from '../component/CryptoWatchlist'
import NftWatchlist from '../component/NftWatchlist'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function Profile() {
  const { user } = CryptoState()
  const [cryptoShow, setCryptoShow] = React.useState(true)
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='user-info-banner'>
        {user?.photoURL ? <img src={user?.photoURL} alt="" /> :
          <img src='./userImages/ava-07.png' alt="" />}
        <div className='user-name-info'>
          {user?.displayName ? <h3>{user?.displayName}</h3> : <h3>Guest user</h3>}
          <h6>{user?.email}</h6>
        </div>
       

      </div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Crypto Watchlist" value="1" />
            <Tab label="nft Watchlist" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><CryptoWatchlist/></TabPanel>
        <TabPanel value="2"><NftWatchlist/></TabPanel>
      </TabContext>
    </Box>
    </>
  )
}

export default Profile
