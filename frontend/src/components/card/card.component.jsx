import React from 'react'
import {withRouter} from 'react-router-dom'
import './card.styles.css'


const Card = ({title, image, history, linkUrl, match})  =>(
    <div className="card-item"
        onClick={() => history.push(`${linkUrl}`)}
    >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${image})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>LÆS MERE</span>
    </div>
  </div>
);




export default withRouter(Card);