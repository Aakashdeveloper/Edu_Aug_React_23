import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div>
                <Link to="/">News Redux</Link>
            </div>
        </header>
    )
}

export default Header;