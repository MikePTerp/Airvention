import React from 'react'
import './card-article.styles.css'
import {withRouter} from 'react-router-dom'


 const CardArticle = ({article, history}) => {
    return (
        <div className="card-article-container">
        <div className="card-article-item" onClick={() => history.push(`${article.linkUrl}`)}>
               <div className='card-article-header'>
                    <img  src={`${article.image}`} alt=""/>
                </div>
                <div className="card-article-body">
                    <h4 className="title-article">{article.title}</h4>
                    <p className="intro-article">{article.intro}</p>
                    <div className="creator">
                        <img src={`${article.creator.img}`} alt=""/>
                        <div className="creator-info">
                        <p>{`${article.creator.name}`}</p>
                        <small>{article.date}</small>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default withRouter(CardArticle)
