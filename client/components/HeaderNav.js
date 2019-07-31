import React, {Component} from 'react';

import './css/HeaderNav.less';

import {
    Link
} from 'react-router-dom';

class HeaderNav extends Component {
    render(){
        return (
            <ul className="HeaderNav">
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        )
    }
}

export default HeaderNav;