import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
        //pregmentation "<></>"
    return (
        <div>
            <img alt='logo' className='logo'
            src='/user.png'/>
            
                <ul className='nav-ul'>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/add">Add Patient</Link></li>
                    <li><Link to="/test">Test</Link></li>
                    <li><Link to="/reports">Reports</Link></li>
                    <li><Link to="/patients">Patients</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                     </div>
    )
}

export default Nav;