import React,{useState} from 'react';
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
import { FaPerson } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaRegHospital } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBoxArrowInRight } from "react-icons/bs";

function Student() {
    const [count, setCount] = useState(8);
    const [count1, setCount1] = useState(13);
    const [count2, setCount2] = useState(0);

  return(
    <div className='container'>
      <div className='left'>
        <img src={Logo} alt="" className='logo'/>
        <div className='icon'><FaUserFriends /></div>
        <p>Student Management</p>
        <div className='icon'><FaWindowMaximize /></div>
        <p>Financial Management</p>
        <div className='icon'><IoSettingsSharp /></div>
        <p>Quality Control</p>
        <div className='icon'><BsFillGrid1X2Fill /></div>
        <p>Report Delivery</p>
        <div className='icon'><FaFile /></div>
        <p>Attendance</p>
        <div className='footer'>
          <div><BsQuestionCircleFill /></div> 
          <div><IoSettingsOutline /></div> 
          <div><BsBoxArrowInRight /></div> 
        </div>
      </div> 

      <div className='right'>
        <div className='head'>
          <h2>Student Management</h2>
        </div>
        <div className='header'>
        <div className='header1'>
          <div className='right-left icon1'><FaUser /></div>
          <button className='btn1' onClick={() => setCount(prev => prev + 1)}>
            <div className='right-right'><span className='span1'>{count}</span><br /><span className='span2'>Regular Student</span></div>
           </button>
        </div>
        <div className='header2'>
          <div className='right-left icon1'><FaUserTie /></div>
          <button className='btn2' onClick={() => setCount1(prev => prev + 1)}>
              <div className='right-right'><span className='span1'>{count1}</span><br /><span className='span2'>Remedial Student</span></div>
           </button>
        </div>
        <div className='header3'>
          <div className='right-left icon1'><FaPerson /></div>
          <button className='btn3' onClick={() => setCount2(prev => prev + 1)}>
            <div className='right-right'><span className='span1'>{count2}</span><br /><span className='span2'>In Paid Clubs</span></div>
          </button>
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
          <div className='icon2'><FaPerson /></div><br/>
          <div className='name'>Club Management</div>
        </div>
        </div>

        <div className='header-1'>
        <div className='head1'>
          <div className='icon2'><FaBookOpenReader /></div><br/>
          <div className='name'>Classroom Management</div>
        </div>
        <div className='head2'>
          <div className='icon2'><MdEmail /></div><br/>
          <div className='name'>SMS/EMAIL</div>
        </div>
        <div className='head3'>
          <div className='icon2'><FaFile /></div><br/>
          <div className='name'>Attendance</div>
        </div>
        </div>

        <div className='header-1'>
        <div className='head4'>
          <div className='icon2'><FaRegHospital /></div><br/>
          <div className='name'>Clinic</div>
        </div>
        </div>
      </div>

    </div>
  )
}

ReactDOM.render(<Student/>,document.getElementById('root'));
