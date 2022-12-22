import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'

const RoyalPage = ({data: {wpRoyal: {royalMeta: royal}}}) => {
    return (
        <Layout pageTitle="Royals Template">
            <h3>{royal.firstName}</h3>
            <p>De content van de royals komt hier</p>
        </Layout>
    )
}

export const query = graphql` 
    query ($id: String) {
        wpRoyal(id: {eq: $id}) {
            royalMeta {
                firstName
                lastName
                house
                age
                bio
                education
                estimatedNetWorth
                gender
                knownScandals
                officialTitle
                origin
                spokenLanguages
                rankingInSuccession
                sports
                title
            }
        }
    }
  `

export default RoyalPage; 