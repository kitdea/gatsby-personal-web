import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../utils/font-awesome';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        { children }
      </div>
      <footer>
        <div >
        
          <ul className='footer-socmed__col'>
            <li><a className='icons' href='https://github.com/kitdea' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={ faGithub } /></a>
            </li>
            <li>
              <a className='icons' href='https://twitter.com/kickin_lyrics' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={ faTwitter } /></a>
            </li>
            <li>
              <a className='icons' href='https://www.linkedin.com/in/francis-mar-rosales-4797bb1b1/' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={ faLinkedin } />
              </a>
            </li>            
          </ul>
        </div>

        <div >
          <ul className='footer-copyright__col'>
            <li><p>© 2022 Francis Mar Rosales</p></li>
          </ul>
        
        </div> 
      </footer>
    </div>
  )
}
