import React from 'react';
import { Link } from 'react-router-dom';

function Footer()
{
    return(
        <nav className="navbar fixed-bottom bg-light">
            <div className="container-fluid">
              <h4>All Rights Reserved. Portfolio Site. &copy; Copyright 2022. <Link to={"/privacy"}>Privacy Policy</Link></h4>
            </div>
          </nav>
    )
}

export default Footer;