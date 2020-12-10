import React from 'react'
import CardProduct from '../../../components/card-product/card-product.component'
import PageHeader from '../../../components/page-header/page-header.component'
import {UvcProducts} from '../../../data/products/UvcProducts'
import ContactedSticky from '../../../components/get-contacted-sticker/get-contacted-sticker.component'



 const UvcProductCard = () => {
    return (
        <div className="main-wrapper">
            <div className="theStart"></div>
        <div className="container">
            <PageHeader title="Uvc Produkter" />
            <main className="main page-main">
                <section className="section">
                    <div className="section-wrapper">
                        <div className="row">
                            <div className="section-header col-12">
                                <h1>Vores Uvc Produkter</h1>
                            </div>
                        </div>
                        <div className="row">
                            {UvcProducts.map((profile, index) =>{
                                return(
                                    <CardProduct key={index} product={profile} />
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
    )
}

export default UvcProductCard