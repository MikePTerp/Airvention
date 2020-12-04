import React from 'react'
import cardComponent from '../card/card.component'
import './card-article.styles.css'

 const CardArticle = ({title, intro, creator, date, image}) => {
    return (
        <div className="card-article-item">
               <div
      className='image-article'
    > <img className="the-img" src={`${image}`}/></div>
            <div className="content-article-card">
                <h1 className="title-article">{title}</h1>
                <div className="article-creator">
                    <p>{`${creator}    -    `}</p>
                    <p>{date}</p>
                </div>
                <p className="intro-article">{intro}</p>
                </div>
            </div>
    )
}

export default CardArticle
