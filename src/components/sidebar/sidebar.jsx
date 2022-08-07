import React from 'react'
import './sidebar.scss'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import { Link } from 'react-router-dom'

const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <div className="logo">Mitramas Infosys Global</div>
        </Link>
        <div className="header2">Layanan IT</div>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className='titleSidebar'>Main Menu</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <GridViewRoundedIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className='titleSidebar'>List</p>
          <Link to='/list-user' style={{ textDecoration: 'none' }}>
            <li>
              <PersonRoundedIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <li>
            <Inventory2RoundedIcon className='icon' />
            <span>Product</span>
          </li>
          <p className='titleSidebar'>Information</p>
          <li>
            <PaidRoundedIcon className='icon' />
            <span>Earning</span>
          </li>
          <li>
            <AccountBalanceWalletRoundedIcon className='icon' />
            <span>Balance</span>
          </li>
          <li>
            <ManageAccountsRoundedIcon className='icon' />
            <span>Profile</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default sidebar