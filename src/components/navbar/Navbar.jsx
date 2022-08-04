import React, { useContext } from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
   const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='navbar'>
        <div className='wrapper'>
           <div className='search'>
             <input type="text" placeholder='Search...'/>
             <SearchOutlinedIcon/>
           </div>
           <div className='items'>
                <div className='item'>
                   <LanguageOutlinedIcon className='icon'/>
                   Language
                </div>
                <div className='item' style={{pointer:"cursor"}}>
                   <DarkModeOutlinedIcon onClick={()=>dispatch({type:"TOGGLE"})} className='icon'/>
                </div>
                <div className='item'>
                   <FullscreenExitOutlinedIcon className='icon'/>
                </div>
                <div className='item'>
                   <NotificationsNoneOutlinedIcon className='icon'/>
                   <div className='counter'>1</div>
                </div>
                <div className='item'>
                   <ChatBubbleOutlineOutlinedIcon className='icon'/>
                   <div className='counter'>1</div>
                </div>
                <div className='item'>
                   <FormatListBulletedOutlinedIcon className='icon'/>
                </div>
                <div className='item'>
                    <img
                    src='https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    alt=''
                    className='avatar'
                    />
                </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar