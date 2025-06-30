import { data } from "../utils/data.js";
import { useState } from "react";

export function Nav() {
  //Make a map from the 'data.js' file and
  //render those files into html dinamic code

  const navItems = data.map((res) => (
    <li className="flex justify-center items-center" key={res.id}>
      <a className="hover:text-red-600 text-lg" href={res.url}>
        {res.text}
      </a>

      {res.thereItems ? (
        <i className="bi bi-arrow-down-short text-2xl text-black"></i>
      ) : (
        <i className="invisible"></i>
      )}
    </li>
  ));

  const [open, setOpen] = useState(false);

  function Data() {
    setOpen(!open);

    open == true
      ? console.log("Es verdadero: ", open)
      : console.log("Es falso: ", open);
  }

  return (
    <nav id="nav" className="w-full md:sticky md:z-100 md:left-0 md:top-0  bg-blue-400  md:h-16">
      <div className=" w-full flex flex-col">
        <button
          onClick={Data}
          className="cursor-pointer p-1 m-1 self-end md:hidden"
          id="btn"
        >
          <i className="bi bi-list text-5xl text-black"></i>
        </button>
      </div>
      <ul
        id="bottom-nav"
        className={` flex flex-col  justify-center items-center w-full ${open == true ? "h-100" : "h-0"} md:text-center overflow-hidden gap-8 transition-all 
    ease-in-out duration-300 md:visible md:flex-row md:h-full`}
      >
        {navItems}
      </ul>
    </nav>
  );
}

// The navigation has a specific height, the state only change
// the 'ul' tag size.
