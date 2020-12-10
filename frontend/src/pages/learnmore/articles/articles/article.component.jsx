import React, { Component } from 'react'
import {Articles} from '../../../../data/articles/Articles.js'
import PageHeader from '../../../../components/page-header/page-header.component'
import ContactedSticky from '../../../../components/get-contacted-sticker/get-contacted-sticker.component'


 class Article extends Component {

    state = {
        thisArticle: null,
        header: "",
        content: ""
    }

    componentDidMount(){
        let id = this.props.match.params.articel_name
        let thisArticle = Articles.find( ({linkUrl}) => linkUrl === id)

        if(thisArticle !== undefined){
        this.setState({thisArticle: thisArticle})
        this.onlyForTesting(thisArticle.article)}
    }

    onlyForTesting = (test) =>{
        let fistpara = test.indexOf("\"")
        
        let header = test.substr(0, fistpara)
        let content = test.substr(fistpara, test.length)

        this.setState({header: header})
        this.setState({content: content})

    }


    render() {

        const thisArticle  = this.state.thisArticle ? (
            <>
            <PageHeader title={this.state.thisArticle.title} />
            <main className="main page-main">
                <section className="section">
                    <div className="section wrapper">
                        <div className="row">
                            <div className="section-header col-12">
                                <h1>{this.state.thisArticle.title}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h2>{this.state.header}</h2>
                                <p>{this.state.content}</p>
                                <p>{this.state.content}</p>
                            </div>
                            <div className="col-6">
                            <h2>{this.state.header}</h2>
                                <p>{this.state.content}</p>
                                <p>{this.state.content}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main> 
           </>
             ) : (
                 <div>
             <PageHeader title='Undskyld' />
             <h1>Vi kunne desværre ikke finde hvad du søgte efter</h1> 
             </div>
                )

        
        return (
            <div className="main-wrapper">
                <div></div>
                <div className="container"  >
                {thisArticle}
                </div>
            <div className="theEnd">
        <ContactedSticky></ContactedSticky>
        </div>
        </div>
        )
    }
}

export default Article
