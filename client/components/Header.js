import React, {Component} from 'react';

import HeaderNav from './HeaderNav';

class Header extends Component {
    render(){
        return (
            <div className="Header">
                <HeaderNav />
            </div>
        )
    }
}

export default Header;