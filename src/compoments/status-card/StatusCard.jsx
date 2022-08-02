import React from 'react'

import './statuscard.css';

const StatusCard = props => {
    return (

      <div className={`status-card ${props.active} coloured-icon`}>
          
              <i className={`status-card__icon ${props.icon}`}></i>
          
          <div className="status-card__info">
              <h4>{props.title}</h4>
              <p><b>{props.count}</b></p>
              <p className="status-card__desription">{props.description}</p>
          </div>
    </div>
      
    )
}

export default StatusCard
