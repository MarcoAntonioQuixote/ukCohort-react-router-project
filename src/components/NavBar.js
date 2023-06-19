import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'reactstrap/lib/Button';

function NavBar() {
  return (
    <div>
        <Link to="/">        
            <Button color='danger'>Gallary</Button>
        </Link>
        <Link to="/add">        
            <Button color='primary'>Add Student</Button>
        </Link>
        <Link to="/compare">        
            <Button color='success'>Compare</Button>
        </Link>
    </div>
  )
}

export default NavBar