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
                     mail: "mailto:paulchason@gmail.com"
                 }
             },
             links: [
                 {
                     title: "Articles",
                     href: "/"
                 },
                 {
                     title: "About me",
                     href: "/info/about-me"
                 },
             ],
             articles_per_page: 25,
             language: "en"
         },
      },
    ],
  }