import React, {useState} from 'react'
import './pdf-view.styles.css'


 function PdfView ({pdf}) {

    return (
            <object data={pdf} type="application/pdf" className="pdfViewer">
            <embed src={pdf} type="application/pdf" />
          </object>
    )
}

export default PdfView