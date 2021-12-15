import React from "react"
import {FiArrowDown} from "react-icons/fi"

const ActionIndicator = ({rotation = "0"}) => {
  return (
	<div className="action-indicator" style={{transform: `rotate(${rotation})`}}>
		<FiArrowDown />
	</div>
  )
}

export default ActionIndicator;
