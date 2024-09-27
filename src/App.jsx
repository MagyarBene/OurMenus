import './App.css'
import { StickyHeader } from './components/StickyHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menus } from './components/Menus';
import { useState } from 'react';

function App() {
  const[selectedCateg,setSelectedCateg] = useState('all')
  //console.log(selectedCateg);
  return (
    <div className="container shadow">
      <StickyHeader selectedCateg={selectedCateg} setSelectedCateg={setSelectedCateg} />
      <Menus selectedCateg={selectedCateg}/>
    </div>
  )
}

export default App
