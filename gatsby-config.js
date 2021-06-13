module.exports = {
    plugins: [
      {
        resolve: "gatsby-theme-serenity",
        options: {
             title: "Paul Chason",
             subtitle: "a short subtitle for the meta title on the home page",
             description: "A minimal theme for your personal blog or webpage",
             siteUrl: "https://paulchason.com",
             defaultPreviewImage: "/og-default.png",
             author: {
                 name: "Paul Chason",
                 bio: "Entrepreneuer",
                 url: "https://paulchason.com",
                 links: {
                     twitter: "https://twitter.com/paulchason",
                     linkedin: "https://linkedin.com/in/paulchason",
                     github: "https://github.com/pchason",
                     instagram: "https://instagram.com/chasonp",
                     mail: ""
                 }
             },
             links: [
                 {
                     title: "Articles",
                     href: "/"
                 },
                 {
                     title: "About me",
                     href: "/about-me"
                 },
             ],
             articles_per_page: 20,
             language: "en"
         },
      },
      {
        resolve: "gatsby-plugin-google-tagmanager",
        options: {
            id: "GTM-NLNG8VD",

            // Include GTM in development.
            //
            // Defaults to false meaning GTM will only be loaded in production.
            includeInDevelopment: false,

            // datalayer to be set before GTM is loaded
            // should be an object or a function that is executed in the browser
            //
            // Defaults to null
            defaultDataLayer: { platform: "gatsby" },

            // Specify optional GTM environment details.
            gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
            gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
            dataLayerName: "YOUR_DATA_LAYER_NAME",

            // Name of the event that is triggered
            // on every Gatsby route change.
            //
            // Defaults to gatsby-route-change
            routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            // The property ID; the tracking code won't be generated without it
            trackingId: "UA-113867539-1",
            // Defines where to place the tracking script - `true` in the head and `false` in the body
            head: false,
            // Setting this parameter is optional
            anonymize: true,
            // Setting this parameter is also optional
            respectDNT: true,
            // Avoids sending pageview hits from custom paths
            exclude: ["/preview/**", "/do-not-track/me/too/"],
            // Delays sending pageview hits on route update (in milliseconds)
            pageTransitionDelay: 0,
            // Enables Google Optimize using your container Id
            optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
            // Enables Google Optimize Experiment ID
            experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
            // Set Variation ID. 0 for original 1,2,3....
            variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
            // Defers execution of google analytics script after page load
            defer: false,
            // Any additional optional fields
            sampleRate: 5,
            siteSpeedSampleRate: 10,
            cookieDomain: "example.com",
        },
      },
    ],
  }