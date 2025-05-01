import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Brand from '../components/Brand';

const Navbar = () => {
    const menuToggle = useRef(null);
    const location = useLocation();
    let navVariant;
    let brandVariant;

    const closeMenu = () => {
        if(menuToggle.current) {
            menuToggle.current.checked = false;
        }
    }
    
    switch(location.pathname) {
        case '/':
            navVariant = 'nav--2';
            brandVariant = 2;
            break;

        default:
            navVariant = 'nav--1';
            brandVariant = 1;
            break;
    }

    return (
        <nav className={`wrapper nav ${navVariant}`}>
            <Brand variant={brandVariant} />

            <div>
                <label htmlFor="navMenuToggle">
                    <svg className="nav__menu-toggle-btn" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                    </svg>
                </label>

                <input ref={menuToggle} id='navMenuToggle' type="checkbox" className='nav__menu-toggle' />

                <ul className='nav__list'>
                    <li className='nav__item'>
                        <label htmlFor="navMenuToggle">
                            <svg className="nav__menu-toggle-btn" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                            </svg>
                        </label>
                    </li>
                    <li className='nav__item'>
                        <Link to='/' onClick={closeMenu} className='nav__link'>Home</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='/about' onClick={closeMenu} className='nav__link'>About</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='/contact' onClick={closeMenu} className='nav__link'>Contact</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='/blog' onClick={closeMenu} className='nav__link'>Blog</Link>
                    </li>
                </ul>

                <div onClick={closeMenu} className='nav__backdrop'></div>
            </div>
        </nav>
    );
}

export default Navbar;