import React from 'react'
import { ReactComponent as BloodSuckerIcn } from "../img/frontal-bat-svgrepo-com.svg";

function BloodSucker(props) {
  return (
    props.showIcon && (
          <svg className="smallIcon">
              <BloodSuckerIcn />
          </svg>
    ) 
  )
}

export default BloodSucker

