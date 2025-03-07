import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../styles'
import {navLinks} from '../constants';
import{ menu, close} from '../assets';
import logo from '../assets/mylogo.png'; 


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={()=>{
            active("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 obj' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Anish &nbsp;<span className='sm:block hidden '>Mishra</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>{
            let passhref = `#${link.id}`
            if(link.id === 'leetcode'){
              passhref = `https://leetcode.com/u/Anishh_/`;
            }
            else if(link.id === 'codeforces'){
              passhref = `https://codeforces.com/profile/Anishh_`;
            }
            else if(link.id === 'resume'){
              passhref = `https://drive.google.com/file/d/1Z3AadRfLuD0ZlY0cV4T_tcndzJw6SFDE/view?usp=drive_link`;
            }
            return(
            <li
              key = {link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white 
                text-[18px] font-medium cursor-pointer
              `}
              onClick={()=>setActive(link.title)}
            >
              <a href={passhref}>{link.title}</a>
            </li>
          )})}
        </ul>


        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer
          ' onClick={()=>setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link)=>{
                let passhref = `#${link.id}`
                if(link.id === 'leetcode'){
                  passhref = `https://leetcode.com/u/Anishh_/`;
                }
                else if(link.id === 'codeforces'){
                  passhref = `https://codeforces.com/profile/Anishh_`;
                }
                else if(link.id === 'resume'){
                  passhref = `https://drive.google.com/file/d/1Z3AadRfLuD0ZlY0cV4T_tcndzJw6SFDE/view?usp=drive_link`;
                }
                return(
                <li
                  key = {link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]
                  `}
                  onClick={()=>{
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={passhref}>{link.title}</a>
                </li>
              )})}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar