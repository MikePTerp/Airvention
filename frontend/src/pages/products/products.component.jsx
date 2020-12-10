import React from 'react'
import PageHeader from '../../components/page-header/page-header.component'
import Card from '../../components/card/card.component'
import ContactedSticky from '../../components/get-contacted-sticker/get-contacted-sticker.component'


 const Products = () => {
    return (        
        
        <div className="main-wrapper">
            <div></div>
        <div className="container">
            <PageHeader title="Produkter" />
            <main className="main page-main">
                <section className="section">
                    <div className="section-wrapper">
                        <div className="row">
                            <div className="section-header col-12">
                                <h1>Vores løsninger</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h2>UVC</h2>
                                <p>
                                Airvention tilbyder en serie af systemer med steriliserende UVC lys til eftermontering i alle eksisterende klima- og køleanlæg.   
                                </p>
                                <h4>To typer</h4>
                                <p>
                                Output lamper til overflader og luftbehandling
                                </p>
                                <p>
                                High-output lamper til intensiv luftbehandling
                                </p>
                                <h4>Tilbehør til UV anlæg</h4>
                                <p>
                                Alle UVC lamper bliver leveret med strømforsyninger i højkvalitetskategorien og min. IP54.
                                </p>
                                <p>
                                Teflonbelægning er muligt som tilvalg for alle lamper og som sikring mod glasstumper i anlæg i tilfælde af uheld.
                                </p>
                                <h4>Dimensionering</h4>
                                <p>
                                Afstanden mellem kanten af fordamper og enden af lampe må max være 15 cm
                                </p>
                                <p>
                                Afstanden mellem fordamper og UVC lyset må max være 30 cm.
                                </p>
                            </div>
                            <div className="col-6">
                                <h2>En anden artikel overskrift</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis sapien eu egestas faucibus. Phasellus et mollis lectus, ac sollicitudin sem. Curabitur vitae pretium nisl. Vestibulum at tristique eros. Cras metus dui, porttitor ut tellus eu, ullamcorper hendrerit ipsum. Phasellus eget mauris sed mi bibendum lacinia sit amet nec arcu. Vivamus ut fermentum nisi. Praesent sagittis nunc non erat tristique, vitae hendrerit libero ultricies. Proin id sem felis. Nullam auctor commodo mauris, vitae tincidunt nunc tincidunt eu. Quisque congue nisl tristique massa mollis malesuada.</p>
                            </div>
                        </div>
                        <div className="row">
                            <Card title="UVC Produkter" image="/img/card-img/uv-light.jpg" linkUrl="uvc-produkter"/>
                            <Card title="Mobile produkter" image="/img/card-img/movable.jpg" linkUrl="mobile-produkter"/>
                            <Card title="Path away produkter" image="/img/card-img/ion.jpg" linkUrl="path-away-produkter"/>
                            <Card title="Ionisering produkter  " image="/img/card-img/ion.jpg" linkUrl="ioniserings-produkter"/>
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

export default Products