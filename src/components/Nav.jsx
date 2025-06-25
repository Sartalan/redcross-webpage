import { data } from '../utils/data.js'
import { useState } from 'react'

export function Nav(){

//Make a map from the 'data.js' file and 
//render those files into html dinamic code

const navItems = data.map((res) => (

<li class="flex justify-center items-center" key={res.id}>
  <a class="hover:text-red-600 text-lg" href={res.url}>{res.text}</a>
  {
    res.items ? (
      <i class="bi bi-arrow-down-short text-2xl text-black"></i>
    ) : (
      <i class="invisible"></i>
    )      
  }

</li>
))

const [open, setOpen] = useState(false);

function Data() {
  setOpen(!open);

  open == true
    ? console.log("Es verdadero: ", open)
    : console.log("Es falso: ", open);
}

return ( 
  <nav id="nav" class="w-full md:h-16">
  <div class="w-full flex flex-col">
    <button
      onClick={Data}
      class="cursor-pointer p-1 m-1 self-end md:hidden"
      id="btn"
    >
      <i class="bi bi-list text-5xl text-black"></i>
    </button>
  </div>
  <ul
    id="bottom-nav"
    class={`flex flex-col justify-center items-center w-full ${open == true ? "h-100" : "h-0"} md:text-center overflow-hidden gap-8 transition-all 
    ease-in-out duration-300 md:visible md:flex-row md:h-full`}
  >

  {navItems}

  </ul>
  </nav>
)}

// The navigation has a specific height, the state only change
// the 'ul' tag size. 
