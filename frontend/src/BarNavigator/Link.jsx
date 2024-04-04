import React, { useState } from "react"
// import { Link } from "react-router-dom";

 const Link = () => {
  return ( 
  <Link className="flex gap-2" to={props.to}>
    <h1>{props.text}</h1>
    <img src={props.src} alt="" />
  </Link>
  )
}

export default Link