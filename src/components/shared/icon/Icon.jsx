import React from 'react'
import {IconContext} from "react-icons"


const Icon = ({children, color}) => {
    return (
     <IconContext.Provider value={{ style: {fontSize: '40px', color:`${color}`}}}>
         <div>
           {children}
         </div>
      </IconContext.Provider>
    )
  }


export default Icon;