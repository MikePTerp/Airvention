import React from 'react';
import './footer.styles.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to='/din-situation'><h2>Din situation</h2></Link>
            <Link to='/Foedevarevirksomhed'>Fødevarevirksomhed</Link>
            <Link to='/Kontor'>Kontor</Link>
            <Link to='/Sundhedssektor'>Sundhedssektor</Link>
          </div>

          <div className='footer-link-items'>
            <Link to='/Laer-mere'><h2>Lær mere</h2></Link>
            <Link to='/artikler'>Artikler</Link>
            <Link to='/Bakterier'>Bakterier</Link>
            <Link to='/Skimmel'>Skimmel</Link>
            
          </div>

          <div className='footer-link-items'>
            <Link to='/produkter'><h2>Produkter</h2></Link>
            <Link to='/uvc-produkter'>UVC produkter</Link>
            <Link to='/ioniserings-produkter'>Ioniserings produkter</Link>
            <Link to='/mobile-produkter'>Mobile produkter</Link>
            <Link to='/path-away-produkter'>Pathaway produkter</Link>
          </div>
        </div>
        
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to='/om-os'><h2>Om os</h2></Link>
            <Link to='/kontakt'>Kontakt</Link>
            <Link to='/Vores-vision'>Vision</Link>
            
          </div>
          <div className='footer-link-items'>
            <h2>Kontakt</h2>
            <p >Knudlundvej 14, 8653 Them</p>
            <p>+45 29 94 40 00</p>
            <a href="mailto:info@airvention.com">info@airvention.com</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Airvention
              
            </Link>
          </div>
          <small className='website-rights'>Airvention © 2020</small>
          <div className='social-icons'>
            <div
              className='social-icon-link facebook'
              target='_blank'
              aria-label='Facebook'
            >
              <a href="https://www.facebook.com/Airvention" target='_blank' rel="noopener noreferrer">
              <i className='fab fa-facebook-f' />
              </a>
              
            </div>
            <div
              className='social-icon-link youtube'
              target='_blank'
              aria-label='Youtube'
            >
              <a href="https://www.youtube.com/channel/UCzl4ZKKy-TRI7ciwqiZV0QQ" target='_blank' rel="noopener noreferrer">
              <i className='fab fa-youtube' />
              </a>
              
            </div>
            <div
              className='social-icon-link linkedin'
              target='_blank'
              aria-label='LinkedIn'
              rel="noopener noreferrer"
            >
              <a href="https://www.linkedin.com/company/airvention-aps/" target='_blank' rel="noopener noreferrer">
              <i className='fab fa-linkedin' />
              </a>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;