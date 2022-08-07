import React from 'react'
import './navbar.scss'
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        {/* <SearchBar /> */}
        <h1>Admin Control</h1>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className="item">
            <NotificationsNoneIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <img src='https://images.pexels.com/photos/8230825/pexels-photo-8230825.jpeg' alt='' className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default navbar