import React, {useState}  from 'react'
import './card-product.styles.css'
import PdfView from '../pdf-view/pdf-view'
import Backdrop from '../backdrop/backdrop.component'
import {withRouter} from 'react-router-dom'


 const CardProduct = ({product, history})  => {
     const {image, header, info, pdf, name} = product

     const[pdfShow, setPdfShow] = useState(false)

    function backDropClickHandler () {
        setPdfShow(false)
    }

    function togglePdf()  {
        setPdfShow(true)
        console.log(product);
    }

     let backDrop
     let pdfShowing

     if(pdfShow){
       backDrop = <Backdrop click={backDropClickHandler}/>
       pdfShowing = <PdfView pdf={pdf}></PdfView>
     }



    return (
        <div className="card-product-container">
        {pdfShowing}
        {backDrop}
        <div className="product-card">
            <div className="product-card-header">
                <img src={`${image}`} alt=""/>
            </div>
            <div className="product-card-body">
                <h4>
                    {header}
                </h4>
                <p>
                    {info}
                </p>
                <div className="body-btns">
                    
                    <div className="btn" onClick={() => history.push(`${history.location.pathname}/${name}`)}>Fotos</div>
                    <div className="btn" onClick={togglePdf}>Produkt ark</div>
                    
                </div>
            </div>

            </div>
        </div>
    )
    // () => history.push(`${name}`
}


export default withRouter(CardProduct)
