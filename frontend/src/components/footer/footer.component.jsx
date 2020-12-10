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
            <Link to='/Foedevarevirksomhed'>Fødevarevirksomhed</Link>
            <Link to='/Kontor'>Kontor</Link>
            <Link to='/Sundhedssektor'>Sundhedssektor</Link>
          </div>

          <div class='footer-link-items'>
            <Link to='/Laer-mere'><h2>Lær mere</h2></Link>
            <Link to='/artikler'>Artikler</Link>
            <Link to='/Bakterier'>Bakterier</Link>
            <Link to='/Skimmel'>Skimmel</Link>
            
          </div>

          <div class='footer-link-items'>
            <Link to='/produkter'><h2>Produkter</h2></Link>
            <Link to='/uvc-produkter'>UVC produkter</Link>
            <Link to='/ioniserings-produkter'>Ioniserings produkter</Link>
            <Link to='/mobile-produkter'>Mobile produkter</Link>
            <Link to='/path-away-produkter'>Pathaway produkter</Link>
          </div>
        </div>
        
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/om-os'><h2>Om os</h2></Link>
            <Link to='/kontakt'>Kontakt</Link>
            <Link to='/Vores-vision'>Vision</Link>
            
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
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
              rel="noopener noreferrer"
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