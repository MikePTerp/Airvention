import React from 'react'
import './checkmarks.styles.css'

const CheckmarkItem = ({item}) =>  {
      return (
          <div className="checkmark-item-grid">
            <div className="checkmark-top">
              <div className="left">
              <i className="fas fa-check fa-4x "></i>
            </div>              
            <div className="checkmark-headers">
              <h3 className="right-up">{item.header1}</h3>
              <h3 className="right-down">{item.header2}</h3>
              </div>
              <span></span>
              </div>
              <p className="buttom">{item.paragraf}</p>
              </div>
    )

}

export default CheckmarkItem
