//Survey field contains logic to render a single label and test
import React from 'react';

// eslint-disable-next-line 
export default  ({input, label, meta:{error , touched} })=> {
 //console.log(meta)
  return (
    <div>
      <label >{label}</label>
     <input {...input}/>
     {touched && error}
    </div>
  )
}


