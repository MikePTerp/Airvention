import React from 'react'
import PageHeader from '../../components/page-header/page-header.component'


 const About = () => {
    return (
        <div className="container">
            <PageHeader title="Om os" />
            <main className="main page-main">
                <section className="section">
                    <div className="section-wrapper">
                        <div className="row">
                            <div className="section-header col-12">
                                <h1>Om os</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h2>Airvention er specialist i UVC-løsninger til alle anlæg inden for klima og nedkøling. Vores luftrensningsanlæg anvendes inden for alle brancher, og særligt i de brancher, hvor åbne fødevarer og mennesker opholder sig.</h2>
                                <p>Hvis du har høje krav til hygiejne i forbindelse med fødevarer, eller hvis du sætter pris på en ren luft og et bedre indeklima, er UVC lys løsningen. Denne løsning sikrer samtidig, at du minimerer omkostninger til drift og vedligeholdelse af aircondition, klima- og køleanlæg.</p>
                            </div>
                            <div className="col-6">
                                <p>
                                Du sparer omkostninger til drift betydeligt, idet UVC fjerner belægninger af biofilm, bestående af bakterier og vira, så dit ventilationsanlæg ikke i samme grad samler skidt og bakterier til sig. Derfor kører anlægget med lavere energiforbrug og mindre behov for rengøring.
                                </p>
                                <p>
                                Løsninger med UVC kan implementeres i alle typer og størrelser anlæg, både stationære og transportable, og resultaterne viser sig hurtigt. Allerede inden for 36 måneder kan din investering være tjent hjem.
                                </p>
                                <p>
                                    Kontakt os for et uforpligtende tilbud i dag.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default About