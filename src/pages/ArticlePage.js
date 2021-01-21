import React from 'react'
import articleContent from './article-content'
import ArticleList from '../components/ArticleList'
import NotFoundPage from './NotFoundPage'


function ArticlePage({ match }){
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    if(!article) return <div className="page-title"><NotFoundPage /></div>

    const otherArticles = articleContent.filter(article => article.name !== name);

    return(
        <div className="blog-section">
            <h1 className="page-title">{article.title}</h1>
            {article.content.map((paragraph,index) =>(
                <p key={index}>{paragraph}</p>
            ))}
            <div className="other-articles">
                <h2>Other Articles:</h2>
                <ArticleList articles={otherArticles} />
            </div>
            
        </div>
    );
}

export default ArticlePage;