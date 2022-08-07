import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaidIcon from '@mui/icons-material/Paid';
import Paid from '@mui/icons-material/Paid';


const widget = ({ type }) => {

  let data;

  const amount = 100
  const diff = 20

  switch (type) {
    case 'user':
      data = {
        title: 'Users',
        isMoney: false,
        link: 'See all users',
        icon: <PersonIcon className='icon' />
      };
      break;
      case 'order':
      data = {
        title: 'Orders',
        isMoney: false,
        link: 'View all orders',
        icon: <ShoppingBagIcon className='icon' />
      };
      break;
      case 'earning':
      data = {
        title: 'Earning',
        isMoney: true,
        link: 'See earning',
        icon: <PaidIcon className='icon' />
      };
      break;
      case 'balance':
      data = {
        title: 'Balance',
        isMoney: false,
        link: 'See balance',
        icon: <AccountBalanceWalletIcon className='icon' />
      };
      break;
  }

  return (
    <div className='widget'>
      <div className="left">
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && "Rp "} {amount} </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default widget