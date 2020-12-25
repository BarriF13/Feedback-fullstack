//Survey field contains logic to render a single label and test
import React from 'react';


export default  ({input, label})=> {
 
  return (
    <div>
      <label >{label}</label>
     <input {...input}/>
    </div>
  )
}


