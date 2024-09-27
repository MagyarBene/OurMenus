import React from 'react'
import { ListGroupItem } from 'reactstrap'
import { ListGroup } from 'reactstrap'
import { AllCategories } from '../utils'

export const Categories = ({selectedCateg, setSelectedCateg}) => {
  console.log(AllCategories());
  return (
    <div className="d-flex justify-content-center">
      <ListGroup horizontal>
        {AllCategories().map(item=>
          <ListGroupItem key={item} 
            className={selectedCateg==item ? "categ bg-warning text-light" : "categ bg-dark text-warning" }
            onClick={()=>setSelectedCateg(item)}

          >

            {item}
            </ListGroupItem>
          
        )}
          
        </ListGroup>
    </div>
  )
}


