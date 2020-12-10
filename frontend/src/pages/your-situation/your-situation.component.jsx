import React from 'react'
import PageHeader from '../../components/page-header/page-header.component'
import ContactedSticky from '../../components/get-contacted-sticker/get-contacted-sticker.component'
import Subheader from '../../components/sub-header/sub-header.component'
import Card from '../../components/card/card.component'

 const YourSituation = () => {
    return (
        <div className="main-wrapper">
        <div></div>
    <div className="theMain container "  >
        <div className="container">
            <PageHeader title="Din situation" />
            <main className="main page-main">
                <section className="section">
                    <div className="section-wrapper">
                        <div className="row">
                        <div className="section-header col-12">
                                <h1>Her hjælper airvention</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h2>En artikel overskrift</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis sapien eu egestas faucibus. Phasellus et mollis lectus, ac sollicitudin sem. Curabitur vitae pretium nisl. Vestibulum at tristique eros. Cras metus dui, porttitor ut tellus eu, ullamcorper hendrerit ipsum. Phasellus eget mauris sed mi bibendum lacinia sit amet nec arcu. Vivamus ut fermentum nisi. Praesent sagittis nunc non erat tristique, vitae hendrerit libero ultricies. Proin id sem felis. Nullam auctor commodo mauris, vitae tincidunt nunc tincidunt eu. Quisque congue nisl tristique massa mollis malesuada.</p>
                            </div>
                            <div className="col-6">
                                <h2>En anden artikel overskrift</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis sapien eu egestas faucibus. Phasellus et mollis lectus, ac sollicitudin sem. Curabitur vitae pretium nisl. Vestibulum at tristique eros. Cras metus dui, porttitor ut tellus eu, ullamcorper hendrerit ipsum. Phasellus eget mauris sed mi bibendum lacinia sit amet nec arcu. Vivamus ut fermentum nisi. Praesent sagittis nunc non erat tristique, vitae hendrerit libero ultricies. Proin id sem felis. Nullam auctor commodo mauris, vitae tincidunt nunc tincidunt eu. Quisque congue nisl tristique massa mollis malesuada.</p>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-12">
                            <Subheader header="Find din sitation"></Subheader>
                        </div>
                    </div>
                    <div className="row">
                            <Card title="Fødevare virksomhed" image="/img/card-img/article.jpg" linkUrl="foedevarevirksomhed"/>
                            <Card title="Kontor" image="/img/card-img/bacteria.jpg" linkUrl="kontor"/>
                            <Card title="Sundhedssektor" image="/img/card-img/mold.jpg" linkUrl="sundhedssektor"/>
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

export default YourSituation