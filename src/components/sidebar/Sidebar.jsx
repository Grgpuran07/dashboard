import React, { useContext } from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'; 
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"
import { DarkModeContext } from '../../context/darkModeContext';
 

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/" style={{textDecoration:"none"}}><span className='logo'>PuranGrg</span></Link></div> 
        <hr/>
        <div className='center'>
            <ul>
                <p className='title'>MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className='title'>LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li> 
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                <li>
                    <ProductionQuantityLimitsIcon className='icon'/>
                    <span>Products</span>
                </li>
                </Link>
                <li>
                    <CreditCardIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon'/>
                    <span>Delievery</span>
                </li>
                <p className='title'>USEFUL</p>
                <li>
                    <LeaderboardIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className='title'>SERVICE</p>
                <li>
                    <SettingsSystemDaydreamIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <p className='title'>USER</p>
                <li>
                    <PsychologyIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <li>
                    <AccountCircleIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div> 
        <div className='bottom'>
            <div className='coloroption' onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className='coloroption' onClick={()=>dispatch({type:"DARK"})}></div>
            {/* <div className='coloroption'></div> */}
        </div> 
    </div>
  )
}

export default Sidebar