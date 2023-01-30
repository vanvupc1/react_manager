<<<<<<< HEAD
import React from 'react'
import './layout.css'
import Routes from '../../routes/Routes'
import TopBar from '../Topbar/TopBar'
import SideBar from '../Sidebar/Sidebar'
import { BrowserRouter, Route } from 'react-router-dom'
const Layout = () => {
  return (
    <BrowserRouter>
         <Route render={(props) => (
           
        
                
                   
                  
                    <div className="layout__content">
                      <SideBar {...props}/>
                      <TopBar/>
                        <div className="layout__content-main">
                         
                            <Routes/>
                         </div>
                    </div> 
                        
         
                          
                    
            
            )}/>
    </BrowserRouter>
  )
}

=======
import React from 'react'
import './layout.css'
import Routes from '../../routes/Routes'
import TopBar from '../Topbar/TopBar'
import SideBar from '../Sidebar/Sidebar'
import { BrowserRouter, Route } from 'react-router-dom'
const Layout = () => {
  return (
    <BrowserRouter>
         <Route render={(props) => (
           
        
                
                   
                  
                    <div className="layout__content">
                      <SideBar {...props}/>
                      <TopBar/>
                        <div className="layout__content-main">
                         
                            <Routes/>
                         </div>
                    </div> 
                        
         
                          
                    
            
            )}/>
    </BrowserRouter>
  )
}

>>>>>>> fcbc12e (update func)
export default Layout