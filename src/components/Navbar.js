import React from 'react'
import { Link } from 'react-router-dom'
function Navbar({user}) {
  return (
    <div className='navbar'>
      <span className='logo'><Link className= "link" to ="/">Sahil App</Link></span>{
        user ? (

       

      <ul className='list'>
        <li className='listitem'>
            <img src="./img/t.jpeg" alt="" className='avatar' />
        </li>
        <li className='listItem'>Sahil Mehra</li>
        <li className="listItem">Logoutbutton</li>
      </ul>
      ) : (<Link className='link' to ="login">Login</Link>)
      }
    </div>
  )
}

export default Navbar
