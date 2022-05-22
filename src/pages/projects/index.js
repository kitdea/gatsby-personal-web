
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Projects( {data} ) {
  
  console.log(data)
  const projects = data.projects.nodes
  // const contact = data.contact.siteMetadata.contact


  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        
        <div className={styles.projects}>

          {projects.map(project =>(
            <Link to={"#"} key={project.id} target={"_blank"} alt={""} >
              <div className={ styles.projects_single }>
                <GatsbyImage image={getImage(project.frontmatter.thumbnail.childImageSharp)} />
                <h3>{ project.frontmatter.title }</h3>
                <h4>{ project.frontmatter.stack }</h4>
                <p>{ project.excerpt }</p>
              </div>
            </Link> 
          ))}
          
        </div>
      </div>
    </Layout>
  ) 
}



// Export page query

export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(
    sort: {fields: frontmatter___title, order: ASC}
    limit: 10
  ) {
    nodes {
      id
      excerpt(format: PLAIN, pruneLength: 80)
      frontmatter {
        title
        stack
        slug
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`



