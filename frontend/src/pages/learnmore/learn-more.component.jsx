import React from 'react'
import PageHeader from '../../components/page-header/page-header.component'
import './learn-more.styles.css'
import UVA from '../../img/uvc-info/UVA_x1-150x150.png'
import UVB from '../../img/uvc-info/UVB_x1-150x150.png'
import UVC from '../../img/uvc-info/UVC-mikrober_x1-150x150.png'
import Subheader from '../../components/sub-header/sub-header.component'
import Card from '../../components/card/card.component'
import ContactedSticky from '../../components/get-contacted-sticker/get-contacted-sticker.component'
import '../hompage/testing.css'

 const LearnMore = () => {
    return (
        <div className="main-wrapper">
            <div></div>
        <div className="container">
        <PageHeader title="Lær mere"/>
        <main className="main page-main">
            <section className="section">
                <div className="section-wrapper">
                    <div className="row">
                    <div className="sction-header col-12"> 
                    <h1>Fakta om UVC</h1>
                    </div>
                    </div>  
                    <div className="row">
                        <div className="col-6">
                            <h2>Ultraviolet lys </h2>
                            <p>UVC lys er det mest kortbølgende i spektret for ultraviolet lys. De korte bølgelængder er i stand til at trænge gennem cellevæggene, og de ødelægger derfor mikroorganismers DNA. UVC forekommer naturligt i solens stråler, men bliver absorberet i atmosfæren, så det ikke når frem til jordens overflade som mere langbølgende UV stråler.</p>
                            <h2>Effektiv teknologi til desinfektion</h2>
                            <p>I mere end 100 år har det været kendt, at UVC stråler har en ødelæggende virkning på det mikrobielle liv, der trives godt i lukkede og fugtige miljøer. Allerede i 1903 blev Niels Finsen tildelt Nobelprisen i medicin og fysiologi for hans bidrag til behandling af især tuberkulose med UVC lys.</p>
                        </div>
                        <div className="col-6">
                        <h2>Hvad er UVC-lys?</h2>
                        <p>UV forekommer naturligt i solens stråler. UVC absorberes fuldstændigt i atmosfæren og når altså ikke frem til Jordens overflade. UVB absorberes i vid udstrækning i ozonlaget. UVA absorberes ikke i atmosfæren, men det spredes som andet lys, og det når altså heller ikke usvækket frem til Jordens overflade. Ultraviolet (UV) lys er en række lette frekvenser, som for det meste er usynlige for det menneskelige øje. UVC-båndet er effektivt til at dræbe bakterier, fordi dets korte bølgelængde er i stand til at trænge gennem cellevæggene af mikroorganismer. Som følge af, at UVC filtreres ud af jordens atmosfære, så har mikrober intet forsvar imod det.</p>
                        </div>
                    </div>
                    <div className="row">
                                <div className="info-pic col-sm-4">
                                <img src={UVA} alt="uva" />
                                <p>
                                UVA “Sort lys” 
                                uskadelige sjov
                                </p>
                            </div >
                                <div className="info-pic col-sm-4">
                                <img src={UVB} alt="uvb" />
                                <p>
                                UVB 
                                Forårsager solskoldning
                                </p>
                            </div>
                                <div className="info-pic col-sm-4">
                                <img src={UVC} alt="uvc" />
                                <p>
                                UVC 
                                Effektiv til at dræbe mikrober
                                </p>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Subheader header="Vil du vide mere ?"></Subheader>
                        </div>
                    </div>
                    <div className="row">
                            <Card title="Artikler" image="/img/card-img/article.jpg" linkUrl="artikler"/>
                            <Card title="Bakterier" image="/img/card-img/bacteria.jpg" linkUrl="bakterier"/>
                            <Card title="Skimmel" image="/img/card-img/mold.jpg" linkUrl="skimmel"/>
                    </div>

                </div>

            </section>
            </main>
        </div>
        <div className="theEnd">
            <ContactedSticky />
        </div>
        </div>
    )
}



export default LearnMore