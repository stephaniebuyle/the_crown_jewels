import { graphql, Link } from 'gatsby';
import * as React from 'react'
import Layout from '../../components/layout'
import Royal from "../../components/royal"


const RoyalsPage = ({ data:
  {
    allWpRoyal: { edges }
  }

}) => {
  return (
    <Layout pageTitle="Crown Jewels">

      <p>A list of royals will be displayed here.</p>
      
    


            <div >
              {edges.map(({ node: royal }) => (
                <Royal key={royal.id} slug={royal.slug} royal={royal} />
              ))}
            </div>

        
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
                gatsbyImageData(placeholder: BLURRED)
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