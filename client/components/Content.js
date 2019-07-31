import React, {Component} from 'react';

import {
    Segment
} from 'semantic-ui-react';

import ContentBody from '../components/ContentBody';

class Content extends Component {
    render(){
        return (
            <div className="Content">
                
                <ContentBody />
                
            </div>
        )
    }
}

export default Content;