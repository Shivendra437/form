import React, { createContext } from 'react';


const contextApi=createContext();

export default function Context(children){
return(
<contextApi.Provider value="data">
  {children}
</contextApi.Provider>
)

}