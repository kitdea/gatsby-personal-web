import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import Img from "gatsby-plugin-image"

export default function Home({ data }) {


console.log(data)

  return (
    <Layout>
    <section className={styles.header}>
      <div>
        <h2>i’m Francis </h2>
        {/* <h3>Web Developer & Web Designer</h3> */}
        <h4>Web Developer & Web Designer based in the Philippines</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro vel tempore similique ullam? Saepe corrupti nihil earum dolor amet doloremque.</p>
        <Link className={styles.btn} to="/projects">My Portfolio</Link>
      </div>
      
      <div>
        {/* <Img>{ banner }</Img> */}
      </div>
      
    </section>
    </Layout>
  )
}

export const query = graphql`
  query HomeImg {
    file(
      relativePath: {eq: "portfolio-banner-img.svg"}
        childImageSharp: {fluid: {}
          gatsbyImageData: {}
        }
    ) {
      id
    }
  }
`

