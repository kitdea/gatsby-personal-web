import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/contact.module.css'

export default function contact() {
  return (
    <Layout>
      <section className={styles.contact}>
        <div>
          <h2>Let's work together</h2>
          <p>to <strong>build.</strong> to <strong className={ styles.text }>inspire.</strong> to <strong>learn.</strong></p>
          <img src="/undraw_collaboration_re_vyau.svg" alt="contact-banner" />
          {/* style={{ maxWidth: '100%'}} */}
        </div>

        <div>
          <form action="">
            <div>
              <label htmlFor="name">Name</label><br></br>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="email">Email</label><br></br>
              <input type="email" />
            </div>
            <div>
              <label htmlFor="message">Message</label><br></br>
              <textarea type="textarea" name="message" rows="4"  />
            </div>
            <button id='submit' className='submit-btn'>Submit</button>
          </form>
        </div>
      </section>
    </Layout>
  )
}
