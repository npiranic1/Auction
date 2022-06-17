import React from 'react'
import 'components/css/BreadCrumbs.css'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

function BreadCrumbs({className, page, dashboard}) {
  return (
    <div role="presentation" className={className} >
      <Breadcrumbs>
        <Link className="bcPage" to="/" >
          {page}
        </Link>
        <Typography color="text.primary" className="dcTitle">{dashboard}</Typography>
      </Breadcrumbs>
    </div>
  )
}

export default BreadCrumbs