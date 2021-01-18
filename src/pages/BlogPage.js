import React from 'react'
import articleContent from './article-content'
import { Link } from 'react-router-dom'


function BlogPage(){
    
    return(
        <div className="blog-section">
            <h1 className="page-title">Blog Articles</h1>
            {articleContent.map((article,index) =>(
                <Link className="article-list-item" key={index} to={`/article/${article.name}`}>
                    <h3 >{article.title}</h3>
                    <p>{article.content[0].substring(0,150)}...</p>
                </Link>
                
            ))}
        </div>
    );
}

export default BlogPage;