"use client"

import {ReactNode, useEffect } from 'react'
import Link from 'next/link'
import './globals.css'
import AOSWrapper from './AOSWrapper'




const RootLayout = ({ children }: {children: ReactNode}) => {
  useEffect(() => {
    const navItem = document.querySelectorAll('.nav-item');
    const hamburgerCheckbox = document.getElementById('toggle') as HTMLInputElement;

    const handleNavClick = () => {
      const screenWidth = window.innerWidth;
      if(screenWidth < 992 && hamburgerCheckbox.checked) {
        hamburgerCheckbox.checked= false;
      }
    }
    navItem.forEach((link) => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      navItem.forEach((link) => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  return (
    <html lang='eng'>
      <body>
        <AOSWrapper>
          <header>
            <div className='menu order-md-2 ms-sm-3 me-md-3'>
              <input type="checkbox" id='toggle' className='checkbox-toggle' />
              <label htmlFor="toggle" className='hamburger ms-3'>
                <span></span>
                <span></span>
                <span></span>
              </label>
              <nav className="main-menu">
                <ul>
                  <li><Link className='nav-item' href='#home'><span className='d-md-none me-2'>0.1</span>Home</Link></li>
                  <li><Link className='nav-item' href='#About'><span className='d-md-none me-2'>0.2</span>About</Link></li>
                  <li><Link className='nav-item' href='#Skills'><span className='d-md-none me-2'>0.3</span>Skills</Link></li>
                  <li><Link className='nav-item' href='#project'><span className='d-md-none me-2'>0.4</span>Project</Link></li>
                  <li><Link className='nav-item' href='#contact'><span className='d-md-none me-2'>0.5</span>Contact</Link></li>
                </ul>
                <Link href='/' className='text-decoration-none mt-5'><h1 className='logo mt-5'>GEORIGE</h1></Link>
              </nav>
            </div>

            <div className='order-md-1 me-3 ms-md-3'>
              <Link href='/' className='text-decoration-none'><h1 className='logo'>GEORIGE</h1></Link>
            </div>
          
          </header>       

          {children}

        </AOSWrapper>
        
      </body>
      
    </html>
  )
}

export default RootLayout
