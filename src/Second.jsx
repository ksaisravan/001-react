import React from 'react'



const Second = (props) => {

    const{model,year,delar,color}=props.mycar;
  return (
    <div>
<div>{model}</div>
<div>{year}</div>
<div>{delar}</div>
<div>{color}</div>
    </div>
  )
}

export default Second


