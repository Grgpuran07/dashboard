import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from '../../components/chart/Chart'
import TableList from '../../components/table/Table'
import "./single.scss"
 

const Single = () => {
  return (
    <div className='single'>
      <Sidebar className="sidebar"/>
      <div className='single-container'>
         <Navbar/>
         <div className='top'>
            <div className='left'>
              <div className='editButton'>Edit</div>
              <h1 className='title'>Information</h1>
              <div className='item'>
                <img 
                 src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                 alt=''
                 className='itemImg'
                 />
                 <div className='details'>
                  <h1 className='itemTitle'>Diya Tamang</h1>
                   <div className='detailItem'>
                    <span className='itemKey'>Email:</span>
                    <span className='itemValue'>Janedoe@gmail.com</span>
                   </div>
                   <div className='detailItem'>
                    <span className='itemKey'>Phone:</span>
                    <span className='itemValue'>9804161680</span>
                   </div>
                   <div className='detailItem'>
                    <span className='itemKey'>Address:</span>
                    <span className='itemValue'>Pokhara,Kaskeri</span>
                   </div>
                   <div className='detailItem'>
                    <span className='itemKey'>Country:</span>
                    <span className='itemValue'>Nepal</span>
                   </div>
                 </div>
              </div>
            </div>
            <div className='right'>
              <Chart aspect={3/1} title="User Spending Last 6 months."/>
            </div>
         </div>
         <div className='bottom'>
             <h1 className='title'>Last Transactions</h1>
             <TableList/>
         </div>
      </div>
    </div>
  )
}

export default Single