import React, {Component} from 'react';

import {
    Route,
    Switch
} from 'react-router-dom';

class ContentBody extends Component {
    render(){
        return (

            <Switch>
                <Route
                    path="/"
                    render={()=><div {...this.props}>
                        ROUTE CONTENT
                    </div>}
                />
            </Switch>
            
        )
    }
}

export default ContentBody;