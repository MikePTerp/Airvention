import React from 'react';
import './footer.styles.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/din-situation'><h2>Din situation</h2></Link>
            <Link to='/Sundhedssektor'>Sundhedssektor</Link>
            <Link to='/Foedevarevirksomhed'>Fødevarevirksomhed</Link>
            <Link to='/Kontor'>Kontor</Link>
          </div>
          <div class='footer-link-items'>
            <Link to='/laermere'><h2>Lær mere</h2></Link>
            <Link to='/Bakterier'>Bakterier</Link>
            <Link to='/Skimmel'>Skimmel</Link>
            <Link to='/Hvad-er-UVC'>Hvad er UVC</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/om-os'><h2>Om os</h2></Link>
            <Link to='/Vores-historie'>Vores historie</Link>
            <Link to='/Vores-hold'>Vores hold</Link>
            <Link to='/Vores-vision'>Vores vision</Link>
            
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
              to=''
              target='_blank'
              aria-label='Facebook'
            >
              <a href="https://www.facebook.com/Airvention" target='_blank' rel="noopener noreferrer">
              <i class='fab fa-facebook-f' />
              </a>
              
              
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <a href="https://www.facebook.com/Airvention" target='_blank' rel="noopener noreferrer">
              <i class='fab fa-instagram' />
              </a>
              
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <a href="https://www.youtube.com/channel/UCzl4ZKKy-TRI7ciwqiZV0QQ" target='_blank' rel="noopener noreferrer">
              <i class='fab fa-youtube' />
              </a>
              
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <a href="https://www.facebook.com/Airvention" target='_blank' rel="noopener noreferrer">
              <i class='fab fa-twitter' />
              </a>
              
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <a href="https://www.linkedin.com/company/airvention-aps/" target='_blank'>
              <i class='fab fa-linkedin' />
              </a>
              
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;