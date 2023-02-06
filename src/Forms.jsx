import React, { useState } from 'react';

const intital={
  name:'',
  Address:'',
  mobile:''
}
export default function Forms(){
  const[state ,setState]=useState(intital)
return (
<>
<form>
  <div>
<label htmlFor="username">Name
  <input type="text" id='username'/>
  </label>
</div>
<div>
<label htmlFor="address">Add.
<input type="text" id="address"/>
</label>
</div>
<div>
<label htmlFor="number">Mobile
<input type='number' id='number'/>
</label>
</div>
<button >Submit</button>
</form>
</>
)
}