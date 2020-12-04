import React from 'react'
import PageHeader from '../../../components/page-header/page-header.component'
import ArticleCard from '../../../components/card-article/card-article.component'
import CardArticle from '../../../components/card-article/card-article.component'
 const Articles = () => {
    return (
        <div className="container" >
            <PageHeader title="Artikler"/>
            <main className="main page-main">
            <div className="row">
            <CardArticle title="Behold din glade Smiley." 
            intro="Undgå at få en sur Smiley eller endnu værre, at få en bøde.
            UVC holder dit køleanlæg fri for skimmel og bakterier."
            image="/img/articles/Elite_Maerkat_600.jpg"
            creator="Michael Stensberg"
            date="21.11.2019"
            />
            <CardArticle title="test" 
            intro="daoindans dasnid oamso daosdoan dao dnoaisndoa"
            image="/img/articles/less-sickness.png"
            creator="Michael Stensberg"
            date="21.11.2019"
            />
                <CardArticle title="test" 
                intro="daoindans dasnid oamso daosdoan dao dnoaisndoa"
                image="/img/articles/Madvarer-new.png"
                creator="Michael Stensbjerg"
                date="21.11.2019"
                />
</div>

            </main>
        </div>
    )
}

export default Articles