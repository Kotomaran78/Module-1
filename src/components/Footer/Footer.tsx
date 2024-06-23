import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@assets/img/logo.png';
import { footerLinks } from './constants';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__top'>
          <Link to='/' className='footer__logo'>
            <img src={logo} alt='Logo' />
          </Link>
          <div className='footer__contact'>
            <h2>
              <a
                href='tel:+74959842513'
                rel='noopener noreferrer'
                className='footer__contact-title'
              >
                +7 (495) 984 25 13
              </a>
            </h2>
            <p>
              <a
                href='mailto:info@neoflex.ru'
                rel='noopener noreferrer'
                className='footer__contact-email'
              >
                info@neoflex.ru
              </a>
            </p>
          </div>
        </div>

        <nav className='footer__nav'>
          {footerLinks.map((link) => (
            <Link key={link.to} className='footer__link' to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
        <hr className='footer__divider' />
        <p className='footer__cookies'>
          We use cookies to personalize our services and improve the user experience of our website.
          Cookies are small files containing information about previous visits to a website. If you
          do not want to use cookies, please change your browser settings.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
