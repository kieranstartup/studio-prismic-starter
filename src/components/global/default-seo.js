import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

export const DefaultSEO = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     prismicSeo {
  //       data {
  //         seo_description {
  //           text
  //         }
  //         seo_keywords {
  //           text
  //         }
  //         seo_image {
  //           url
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <Helmet
      title={`Title`}
      htmlAttributes={{ lang: "en" }}
      meta={[
        {
          name: "viewport",
          content:
            "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1",
        },
        // {
        //   name: "description",
        //   content: `${data.prismicSeo.data.seo_description.text}`,
        // },
        // {
        //   name: "keywords",
        //   content: `${data.prismicSeo.data.seo_keywords.text}`,
        // },
        // {
        //   name: "og:image",
        //   content: `${data.prismicSeo.data.seo_image.url}`,
        // },
        // {
        //   name: "og:image:secure_url",
        //   content: `${data.prismicSeo.data.seo_image.url}`,
        // },
        // {
        //   name: "og:description",
        //   content: `${data.prismicSeo.data.seo_description.text}`,
        // },
        // {
        //   name: "og:image:width",
        //   content: `1200`,
        // },
        // {
        //   name: "og:image:height",
        //   content: `630`,
        // },
        // {
        //   name: "og:locale",
        //   content: `en`,
        // },
        // {
        //   name: "twitter:title",
        //   content: `Title`,
        // },
        // {
        //   name: "twitter:description",
        //   content: `${data.prismicSeo.data.seo_description.text}`,
        // },
        // {
        //   name: "twitter:card",
        //   content: `summary_large_image`,
        // },
        // {
        //   name: "twitter:image",
        //   content: `${data.prismicSeo.data.seo_image.url}`,
        // },
      ]}
      link={[
        {
          rel: "preload",
          href: "/fonts/fonts.css",
          as: "style",
        },
        {
          rel: "dns-prefetch",
          href: "https://images.prismic.io/repository-name",
        },
        {
          rel: "preconnect",
          href: "https://images.prismic.io/repository-name",
        },
        // {
        //   rel: "dns-prefetch",
        //   href: "https://player.vimeo.com",
        // },
        // {
        //   rel: "preconnect",
        //   href: "https://player.vimeo.com",
        // },
        // {
        //   rel: "dns-prefetch",
        //   href: "https://i.vimeocdn.com",
        // },
        // {
        //   rel: "preconnect",
        //   href: "https://i.vimeocdn.com",
        // },
        // {
        //   rel: "dns-prefetch",
        //   href: "https://f.vimeocdn.com",
        // },
        // {
        //   rel: "preconnect",
        //   href: "https://f.vimeocdn.com",
        // },
        // {
        //   rel: "preload",
        //   href: "/fonts/soehne-web-kraftig-kursiv.woff",
        //   as: "font",
        //   crossOrigin: "anonymous",
        // },
        // {
        //   rel: "preload",
        //   href: "/fonts/soehne-web-kraftig-kursiv.woff2",
        //   as: "font",
        //   crossOrigin: "anonymous",
        // },
        // {
        //   rel: "preload",
        //   href: "/fonts/soehne-web-kraftig-kursiv.eot",
        //   as: "font",
        //   crossOrigin: "anonymous",
        // },
        // {
        //   rel: "preload",
        //   href: "/fonts/soehne-web-leicht.woff",
        //   as: "font",
        //   crossOrigin: "anonymous",
        // },
        // {
        //   rel: "preload",
        //   href: "/fonts/soehne-web-leicht.woff2",
        //   as: "font",
        //   crossOrigin: "anonymous",
        // },
        // {
        //   rel: "preload",
        //   href: "/fonts/soehne-web-leicht.eot",
        //   as: "font",
        //   crossOrigin: "anonymous",
        // },
        // {
        //   rel: "preload",
        //   href: "/fonts/soehne-web-leicht-kursiv.woff",
        //   as: "font",
        //   crossOrigin: "anonymous",
        // },
        // {
        //   rel: "preload",
        //   href: "/fonts/soehne-web-leicht-kursiv.woff2",
        //   as: "font",
        //   crossOrigin: "anonymous",
        // },
        // {
        //   rel: "preload",
        //   href: "/fonts/soehne-web-leicht-kursiv.eot",
        //   as: "font",
        //   crossOrigin: "anonymous",
        // },
      ]}
    >
      {/* <link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/checka11y-css/checka11y.css"
			/> */}
    </Helmet>
  );
};
