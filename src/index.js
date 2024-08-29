import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './Assets/logo.webp';
import { FaUserFriends } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaWindowMaximize } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaFile } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { BsPersonStanding } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";


function Student() {
  return(
    <div className='container'>
      <div className='left'>
        <img src={Logo} alt="" className='img'/>
        <div className='icon'><FaUserFriends /></div>
        <h3>Student Management</h3>
        <div className='icon'><FaWindowMaximize /></div>
        <h3>Financial Management</h3>
        <div className='icon'><IoSettingsSharp /></div>
        <h3>Quality Control</h3>
        <div className='icon'><BsFillGrid1X2Fill /></div>
        <h3>Report Delivery</h3>
        <div className='icon'><FaFile /></div>
        <h3>Attendance</h3>
      </div> 

      <div className='rigth'>
        <div className='head'>
          <h2>Student Management</h2>
        </div>
        <div className='header'>
        <div className='header1'>
          <div className='right-left icon1'><FaUser /></div>
          <div className='right-right'><span>8</span><br/>Regular Student</div>
        </div>
        <div className='header2'>
          <div className='right-left icon1'><FaUserTie /></div>
          <div className='right-right'><span>13</span><br/>Remedial Student</div>
        </div>
        <div className='header3'>
          <div className='right-left icon1'><BsPersonStanding /></div>
          <div className='right-right'><sapn>00</sapn><br/>In Paid Clubs</div>
        </div>
        </div>

        <div>
          <h3 className='menu'>Menu</h3>
        </div>

        <div className='header-1'>
        <div className='head1'>
          <div className='icon2'><FaUser /></div><br/>
          <div className='name'>Regular Enrollement</div>
        </div>
        <div className='head2'>
          <div className='icon2'><FaBook /></div><br/>
          <div className='name'>Remedial Enrollement</div>
        </div>
        <div className='head3'>
          <div className='icon2'><BsPersonStanding /></div><br/>
          <div className='name'>Club Management</div>
        </div>
        </div>



      </div>



    </div>
  )
}

ReactDOM.render(<Student/>,document.getElementById('root'));
