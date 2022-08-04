import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/feature/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TableList from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
         <Sidebar/>
         <div className='home-container'>
            <Navbar/>
            <div className='widgets'>
                 <Widget type="user"/>
                 <Widget type="order"/>
                 <Widget type="earning"/>
                 <Widget type="balance"/>
            </div>
            <div className='charts'>
                <Featured/>
                <Chart aspect={2/1} title="Revenue Last 6 Months."/>
            </div>
            <div className='listcontainer'>
                <div className='listtitle'>
                     Latest orders list
                     <TableList/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home