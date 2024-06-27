import React from 'react'
import './breadcrumb.css'
const Breadcrumb = ({home,activeTitle}) => {
  return (
    <div>
      <section className="page-title-area ">     
        <div className="container p0">
            <ul className="breadcrumb-nav">
                <li><a href="index-3.html">{home}</a></li>
                <li className="active">{activeTitle}</li>
                 
                <span className="animate animate1 "></span>
                <span className="animate animateMob animate6 "></span>
            </ul>
        </div>
    </section>
    </div>
  )
}

export default Breadcrumb
