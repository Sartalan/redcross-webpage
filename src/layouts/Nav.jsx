import data from '../utils/data.js'

export function Nav(){
return (
<nav>
  <ul>
    {NavList} 
  </ul>
</nav>
)
}

function NavList(){

    const listItems = data.map(items => 
        <li key={items.id}>
          <a href={items.url}>{items.text}</a>
        </li>
      ) 

return (
    {listItems}
)
}
