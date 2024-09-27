import React, { useEffect, useState } from 'react'
import {data} from '../data'

export const Menus = ({selectedCateg}) => {
  const [menus, setMenus]=useState(null)

  console.log(selectedCateg);
  useEffect(()=>{
    setMenus(selectedCateg =='all'? data: data.filter(obj => obj.category==selectedCateg))
  },[selectedCateg])

  menus && console.log(menus)
   
  return (
    <div className="menus">
     
        {menus && menus.map(obj=>
        <div key={obj.id} className="card ">
          <h3 className="title">{obj.title}</h3>
          <div>{obj.desc}</div>
          <div className="bold">Price:{obj.price}</div>
          <img className="img-thumbnail" src={'images/'+obj.img} alt={obj.title} />
          
      </div>
        )}
    </div>
  )
}


