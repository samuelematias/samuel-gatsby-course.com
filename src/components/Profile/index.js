import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

const Profile = () => (
    <StaticQuery
        query={graphql`
        query MySiteMetadata {
            site {
              siteMetadata {
                title
                position
                description
              }
            }
          }   
    `}
        render={data => {
            let dataPatch = data.site.siteMetadata;
            return <div className="Profile-wrapper">
                <h1>{dataPatch.title}</h1>
                <h2>{dataPatch.position}</h2>
                <p>{dataPatch.description}</p>
            </div>
        }
        }
    />

)

export default Profile