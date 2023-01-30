import React from 'react'
import Clock from '../compoments/Clock/Clock'
import Helmet from '../compoments/Helmet/Helmet'
const Customer = () => {
  return (
    <Helmet title= "Bảng Nhân Viên">
    <div> 
    <div className="row">
      <div className="col-md-12">
        <div className="menu-title">
          <div className="menu-breadcrumb breadcrumb">
            <div className="breadcrumb-item">
              <b>Bảng Nhân Viên </b>
            </div>
          
        </div>
        <div id="clock">
            <Clock />
          </div>
       </div>
     </div>
   </div>
    </div>
  </Helmet>
  )
}

export default Customer