import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'

/* function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
} */

function BreadCrumbs({className}) {
  return (
    <div role="presentation" className={className} >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/" className="bcPage">
          HOME
        </Link>
        <Typography color="text.primary" className="dcTitle">SINGLE PRODUCT</Typography>
      </Breadcrumbs>
    </div>
  )
}

export default BreadCrumbs