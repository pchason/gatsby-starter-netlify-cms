import React from "react"
import { graphql } from "gatsby"
import LayoutArticle from "gatsby-theme-serenity/src/components/LayoutArticle";
import ArticleDetail from "gatsby-theme-serenity/src/components/ArticleDetail";
import useSiteMetadata from "gatsby-theme-serenity/src/hooks/use-site-metadata";
import Author from "gatsby-theme-serenity/src/components/Author";
import Comments from "../components/Comments";

const IndexTemplate = ({ data }) => {
    const {
        title,
        description,
        author
    } = useSiteMetadata();

    const article = data.markdownRemark.frontmatter;
    const htmlContent = data.markdownRemark.html
    const metaTitle = `${article.title} - ${title}`;

    return <LayoutArticle
            metaTitle={metaTitle}
            metaDescription={article.description ? article.description : description}
            metaUrlPath={article.slug}
            metaPreviewImage={article.coverImage}>
            <ArticleDetail
                title={article.title}
                slug={article.slug}
                date={article.date}
                coverImage={article.coverImage}
                coverImageCaption={article.coverImageCaption}
                content={htmlContent}/>
            <Comments/>
            <Author author={author}/>
        </LayoutArticle>
}


export const query = graphql`
  query articleBySlugAndArticleBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date
        description
        tags
        title
        slug
        coverImage
        coverImageCaption
      }
    }
  }
`;


export default IndexTemplate