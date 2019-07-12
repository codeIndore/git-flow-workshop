import React from 'react'
import { Link } from 'gatsby'
import Card from '../components/userCard'
import Layout from '../components/layout'

const Submission = ({data}) => (
<Layout>
  <div className="card-container">
    {
      data.allMarkdownRemark.edges.map(profile => {
        return <Card username={profile.node.frontmatter.username}
                      fullname={profile.node.frontmatter.fullname}/>
      })
    }
  </div>
</Layout>
)

export default Submission


export const profileQuery = graphql`
  query profiles{
    allMarkdownRemark(sort: {fields:[frontmatter___fullname] order: ASC}) {
      edges {
        node {
          frontmatter {
            username
            fullname
          }
        }
      }
    }
  }
`
