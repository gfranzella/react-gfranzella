import React from 'react'
import ArticleList from '../components/ArticleList'
import articleContent from '../pages/article-content'


function BlogPage(){
    
    return(
        <div className="blog-section">
            <h1 className="page-title">Blog Articles</h1>
            <ArticleList articles = {articleContent} />
        </div>
    );
}

export default BlogPage;