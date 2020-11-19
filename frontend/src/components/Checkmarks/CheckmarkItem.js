import React from 'react'
import PropTypes from 'prop-types'

class CheckmarkItem extends React.Component {
    render()
    {    return (
          <div className="checkmark-item-grid">
              <div className="left">
              <i class="fas fa-check fa-3x "></i>
            </div>              
              <h3 className="right-up">{this.props.item.header1}</h3>
              <h3 className="right-down">{this.props.item.header2}</h3>
              <p className="buttom">{this.props.item.paragraf}</p>
              </div>
    )
}
}



export default CheckmarkItem
