import React from 'react'

const Card = ({number,cart,text}) => {
  return (
    <div style={{display:"flex",flexDirection:"column",padding:"10px",boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <div>{text}</div>
        <div>{cart}</div>
    </div>
    <div>{number}</div>
    </div>
  )
}

export default Card
