import { graphql, Link } from 'gatsby';
import * as React from 'react'
import Layout from '../../components/layout'

const RoyalsPage = ({ data: { allWpRoyal: { edges } } }) => {
  return (
    <Layout pageTitle="Crown Jewels">
      <p>A list of royals will be displayed here.</p>
      {edges.map((item) => {
        const royal = item.node.royalMeta;
        const slug = item.node.slug; 
        return (
          <div>

            <Link to={`/royals/${slug}`}>
            
            <p key={item.node.id}>{royal.firstName} {royal.lastName} {royal.officialTitle} {royal.house}</p>
            <img src={item.img}></img>
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}
export default RoyalsPage;

export const query = graphql`
query {
  allWpRoyal {
    edges {
      node {
        id
        royalMeta {
          firstName
          lastName
          officialTitle
          house
          pictureCard {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
              }
            }
          }
        }
        slug
        titles {
          nodes {
            name
          }
        }
      }
    }
  }
}
`