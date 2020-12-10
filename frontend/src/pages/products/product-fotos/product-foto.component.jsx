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
        
        this.setState({images: th.images})
        this.setState({product: product})
    }


    render(){
        const product  = this.state.product ? (
            <div className="main-wrapper">
            <div></div>
            <div className="theMain container "  >
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
                                    <div className="image-component">
                                    <img src={`${process.env.PUBLIC_URL}/${item}`} alt="" />   
                                    </div>
                                    )
                                })}

                        </div>

                    </div>

                </section>
            </main> 
            </div>
        <div className="theEnd">
        <ContactedSticky></ContactedSticky>
        </div>
        </div>
            ) : (<h1>Bad request!</h1> )

    return (
        <div className="container">
           {product}
        </div>
    )
}
}

export default ProductFotos
