import React from 'react'
import {Articles} from '../../../data/articles/Articles.js'
import PageHeader from '../../../components/page-header/page-header.component'
import CardArticle from '../../../components/card-article/card-article.component'
import ContactedSticky from '../../../components/get-contacted-sticker/get-contacted-sticker.component'


 const ArticleDirectory = () => {

    return (
        <div className="main-wrapper">
        <div></div>
    <div className="theMain container "  >
        <div className="container" >
            <PageHeader title="Artikler"/>
            <main className="main page-main">
                <section className="section">
                    <div className="section-wrapper">
                    <div className="row">
                        <div className="section-header no-header">
                        </div>
                        </div>  
            <div className="row">
            {Articles.map((item, index)=>{
                return(<CardArticle key={index} article={item} />)
            })
                }
            </div>
            </div>
                </section>
            </main>
        </div>
        </div>
        <div className="theEnd">
        <ContactedSticky></ContactedSticky>
        </div>
        </div>
    )
}

export default ArticleDirectory