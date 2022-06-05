import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

function BreadCrumbs({className}) {
  return (
    <div role="presentation" className={className} >
      <Breadcrumbs>
        <Link className="bcPage" to="/" >
          HOME
        </Link>
        <Typography color="text.primary" className="dcTitle">SINGLE PRODUCT</Typography>
      </Breadcrumbs>
    </div>
  )
}

export default BreadCrumbs