import React from 'react'
import Asterisk from './asterisk.svg?react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

function RequiredIcon() {
  return (
    <OverlayTrigger
      key="top"
      placement="top"
      overlay={<Tooltip id={`tooltip-top`}>Mandatory</Tooltip>}
    >
      <Asterisk width="1rem" height="1rem" style={{marginRight:"2px"}} />
    </OverlayTrigger>
  )
}

export default RequiredIcon