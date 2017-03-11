import React from "react"

import CamperListItem from "./camper_list_item"

const CamperList = ({campers}) => { // normally props in () but ES6 you can put in {name of props} in order to make campers == props.campers

  const Items = campers.map((camper, index) => { // would be props.campers.map if not for above shorthand
    return <CamperListItem key={index} number = {index + 1} camper={camper} />
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Last 30 Days</th>
          <th>All Time Points</th>
        </tr>
      </thead>
      <tbody>
        {Items}
      </tbody>
    </table>
  ) // return
} // CamperList

export default CamperList
