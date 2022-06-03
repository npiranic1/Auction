import React from 'react'
import 'components/css/SideHeader.css'
import BreadCrumbs from 'components/js/BreadCrumbs.js'

function SideHeader({dashboard, page}) {
  return (
    <div className="sideHeader">
        <p className="dashboard">{dashboard}</p>
        {/* add class */}
        <BreadCrumbs/>
    </div>
  )
}

export default SideHeader