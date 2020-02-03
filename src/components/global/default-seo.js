import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const DefaultSEO = ({ data, location }) => {
  const pageTitle = location.pathname.split("/")[1]
  const capitalizedPageTitle =
    pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
  const finalPageTitle =
    capitalizedPageTitle === "" ? "Maison Artefact" : capitalizedPageTitle

  return (
    <Helmet
      title={`${finalPageTitle}`}
      meta={[
        {
          name: "description",
          content: `${data.prismicHomepage.data.text.text}`,
        },
        {
          name: "og:image",
          content: `${data.prismicHomepage.data.desktop_image.url}`,
        },
        {
          name: "og:image:secure_url",
          content: `${data.prismicHomepage.data.desktop_image.url}`,
        },
        {
          name: "og:description",
          content: `${data.prismicHomepage.data.text.text}`,
        },
        {
          name: "og:image:width",
          content: `1200`,
        },
        {
          name: "og:image:height",
          content: `630`,
        },
        {
          name: "og:locale",
          content: `en`,
        },
        {
          name: "twitter:title",
          content: `Maison Artefact`,
        },
        {
          name: "twitter:description",
          content: `${data.prismicHomepage.data.text.text}`,
        },
        {
          name: "twitter:card",
          content: `summary_large_image`,
        },
        {
          name: "twitter:image",
          content: `${data.prismicHomepage.data.desktop_image.url}`,
        },
      ]}
    />
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        prismicHomepage {
          data {
            desktop_image {
              url
            }
            text {
              text
            }
          }
        }
      }
    `}
    render={data => <DefaultSEO data={data} {...props} />}
  />
)
