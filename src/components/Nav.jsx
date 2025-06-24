 import {data} from '../utils/data.js'

 export function Nav(){

  const listItems = data.map((res) => (
  <li key={res.id}>
    <a href={res.url}>{res.text}</a>
  </li>
  ))

return (
    <nav>
      <ul>
        {listItems}
      </ul>
    </nav>

)
}
