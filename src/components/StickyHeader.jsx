import React from 'react'
import { Categories } from './Categories'
import { MotionTitle } from './MotionTitle'

export const StickyHeader = ({selectedCateg,setSelectedCateg}) => {
  return (
    <div className="sticky">
        <MotionTitle/>
        <Categories selectedCateg={selectedCateg} setSelectedCateg={setSelectedCateg}/>
    </div>
  )
}


