import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'

export default function about() {
  return (
    <Layout>
      <section className={styles.about}>
        <div>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nisl pretium fusce id. Convallis aenean et tortor at risus viverra adipiscing at in. At consectetur lorem donec massa sapien. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Tellus in hac habitasse platea dictumst vestibulum. Duis at tellus at urna condimentum mattis pellentesque id nibh. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Tempor id eu nisl nunc mi ipsum faucibus vitae.
          </p>
        </div>

        <div>
          <img src="/about-me.svg" alt="site banner" />
          {/* style={{ maxWidth: '100%'}} */}
        </div>
      </section>
    </Layout>
  )
}
