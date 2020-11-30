import React from 'react';
import './footer.styles.css';
import { Button } from './button/button.component';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Din situation</h2>
            <Link to='/'>Kontor</Link>
            <Link to='/'>Fødevare</Link>
            <Link to='/'>Sundshedsvirksomhed</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Lær mere</h2>
            <Link to='/'>Hvad er UVC</Link>
            <Link to='/'>Bakterier</Link>
            <Link to='/'>Skimmel</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Om os</h2>
            <Link to='/'>Vores historie</Link>
            <Link to='/'>Vores vision</Link>
            <Link to='/'>Vores hold</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Kontakt</h2>
            <p >Knudlundvej 14, 8653 Them</p>
            <p>+45 29 94 40 00</p>
            <a href="mailto:info@airvention.com">info@airvention.com</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Airvention
              
            </Link>
          </div>
          <small class='website-rights'>Airvention © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;