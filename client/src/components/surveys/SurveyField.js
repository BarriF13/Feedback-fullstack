//Survey field contains logic to render a single label and test
import React from 'react';

// eslint-disable-next-line 
export default  ({input, label, meta:{error , touched} })=> {
 //console.log(meta)
  return (
    <div>
      <label >{label}</label>
     <input {...input} style={{ marginBottom: '5px'}}/>
     <div className="red-text" style={{ marginBottom:'20px' }}>
     {touched && error}
     </div>
     
    </div>
  )
}


