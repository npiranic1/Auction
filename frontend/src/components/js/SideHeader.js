import React from "react";
import "components/css/SideHeader.css";
import BreadCrumbs from "components/js/BreadCrumbs.js";

function SideHeader({ dashboard, page }) {
  return (
    <div className="sideHeader">
      <div className="breadcrumbsWrapper">
        <div className="dashboard">{dashboard}</div>
        {page !== "" && (
          <BreadCrumbs
            className="breadCrumbs"
            page={page}
            dashboard={dashboard}
          />
        )}
      </div>
    </div>
  );
}

export default SideHeader;
