import React from 'react'
import { Link } from 'react-router-dom'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import './sidebar.css'
import img from '../../assets/images/hay.jpg'
const SidebarItem = props => {

  const active = props.active ? 'active' : ''

  return (
      <div className={`sidebar-menu__item ${active}`}>
              <i className={`sidebar-menu__icon ${props.icon}`}></i>
              <span className="sidebar-menu__label">
                  {props.title}
              </span>
          </div>
      
  )
}
const SideBar= props => {
  const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
  return (
    
    <div className="sidebar">
      <div className="sidebar__user">
       <div className="sidebar__user-avatar">
       <img classname="sidebar__user-avatar"src={img} alt=""  />
       </div>
        
        
        <div>
          <p className="sidebar__user-name">vansn</p>
          <p className="sidebar__user-discriprion">www</p>
        </div>
      </div>
      <hr/>
      <div className="sidebar-menu">
        <div className="sidebar-menu__item pos">
            <i className="sidebar-menu__icon bx bx-cart-alt"></i>
            <span className="sidebar-menu__label">
            POS Bán Hàng
            </span>
        </div>
        {
          sidebar_items.map((item ,index) =>
          <Link to={item.route} key={index}>
               <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                />
          </Link>
          )
        }
      </div>
    </div>
  )
}

export default SideBar