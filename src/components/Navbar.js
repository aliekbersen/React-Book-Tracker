import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/' className='brand'><h1>Bookshelf</h1></Link>

      <Link to='/add' className='add'><p>Add a Book</p></Link>

    </div>
  )
}

