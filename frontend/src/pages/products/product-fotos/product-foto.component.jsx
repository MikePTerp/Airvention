import React from 'react'
import { Component } from 'react'
import {UvcProducts} from '../../../data/products/UvcProducts'
import './product-fotos.styles.css'
import PageHeader from '../../../components/page-header/page-header.component'
import ContactedSticky from '../../../components/get-contacted-sticker/get-contacted-sticker.component'



class ProductFotos extends Component {

    state = {
        images: [null],
        product: ""
    }

    componentDidMount(){
        let product = this.props.match.params.product
        let th = UvcProducts.find(({name}) => name === product)
        
        if(th !== undefined){
        this.setState({images: th.images})
        this.setState({product: product})}
    }


    render(){
        const product  = this.state.product ? (
            <>
            <PageHeader title={this.state.product} />
            <main className="main page main">
                <section className="section">
                    <div className="section wrapper">
                        <div className="row">
                            <div className="section-header col-12">
                                <h1>Billeder af {this.state.product}</h1>
                            </div>
                        </div>
                        <div className="row">
                            {this.state.images.map((item, index) =>{
                                return(
                                    <div className="image-component" key={index}>
                                    <img src={`${process.env.PUBLIC_URL}/${item}`} alt="" />   
                                    </div>
                                    )
                                })}
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
        <div className="container">
           {product}
        </div>
        <div className="theEnd">
        <ContactedSticky></ContactedSticky>
        </div>
        </div>
    )
}
}

export default ProductFotos
