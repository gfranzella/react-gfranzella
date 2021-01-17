import React from 'react'
import articleContent from './article-content'


function ArticlePage({ match }){
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    if(!article) return <h1 className="page-title">Blog Article does not exists</h1>
    return(
        <div>
            <h1 className="page-title">{article.title}</h1>
            {article.content.map((paragraph,index) =>(
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
}

export default ArticlePage;