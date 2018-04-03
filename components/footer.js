import React from 'react'

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='footer__logo'>
        <a href='https://api.gouv.fr/'>
          <img src='/static/images/logo-api.gouv.fr-white.png' alt='Logo api.gouv.fr' />
        </a>
        <ul className='footer__social'>
          <li><a href='https://twitter.com/BetaGouv' title='Twitter'><img src='/static/images/social/twitter.svg' alt='Twitter' className='icon icon-twitter' /></a></li>
          <li><a href='https://github.com/betagouv' title='Github'><img src='/static/images/social/github.svg' alt='Github' className='icon icon-github' /></a></li>
          <li><a href='mailto:contact@particulier.api.gouv.fr' title='Nous écrire un mail'><img src='/static/images/social/email.svg' alt='Email' className='icon icon-mail' /></a></li>
        </ul>
        <style jsx>{`
          a {
            opacity: 0.4;
          }

          a:hover,
          a:focus {
            opacity: 1;
          }
        `}</style>
      </div>
      <ul className='footer__links'>
        <li><h2>particulier.api.gouv.fr</h2></li>
        <li><a href='https://status.particulier.api.gouv.fr'>Status des API</a></li>
      </ul>
    </div>
  </footer>
)

export default Footer
