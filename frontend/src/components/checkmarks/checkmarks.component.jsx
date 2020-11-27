import React from 'react'
import Checkmark_item from './checkmark-item.component'
import './checkmarks.styles.css'

const Checkmarks = () => {
    var itemOne = {
        header1: "Bedre",
        header2: "indeklima",
        paragraf: "- Undgå spredning af bakterier og skab et bedre indeklima for dig og dine medarbejdere"
                    }
    var itemTwo = {
        header1: "Spar",
        header2: "penge",
        paragraf: "- Med UVC lys sparer du penge på både energi og sygefravær"
    }
    var itemTree ={
        header1: "Spar",
        header2: "tid",
        paragraf: "- Med UVC lys sparer du tid på rengøring af ventilationsanlæget"
    }

    return (
        <section className="checkmarks">
            <div className="container">
                <h2 className="checkmarks-heading text-center my-1">
                    Der er mange grunde til at installere UVC lys fra Airvention
                </h2>
                <div className="grid grid-3 text-center my-4">
                    <Checkmark_item item={itemOne}/>
                    <Checkmark_item item={itemTwo}/>
                    <Checkmark_item item={itemTree}/>
                </div>

            </div>
            
        </section>
    )
}

export default Checkmarks
