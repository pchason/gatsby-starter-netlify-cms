import React from 'react';
import useFormattedDate from "../hooks/use-formatted-date";

export default ({ title, date, content, coverImage="", coverImageCaption="" }) => {
    const formattedDate = useFormattedDate(date, "ll");
    
    return <article className={"article detail"}>
        <header>
            <h1>{title}</h1>
            <time pubdate={"yes"}
                  dateTime={date}>{formattedDate}</time>
        </header>

        {coverImage && <figure className={"cover"}>
            <img src={coverImage} alt={title}/>
            {coverImageCaption && <figcaption dangerouslySetInnerHTML={{__html: coverImageCaption}}></figcaption>}
        </figure>}

        <section dangerouslySetInnerHTML={{__html: content}}/>
        <script src="https://utteranc.es/client.js"
            repo="pchason/paulchason.com-gatsby-netlify"
            issue-term="pathname"
            theme="github-light"
            crossorigin="anonymous"
            async>
        </script>

    </article>
}

