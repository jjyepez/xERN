import React, {Component} from 'react';

import {
    Route,
    Switch
} from 'react-router-dom';

import {
    Container,
    Segment,
    Grid
} from 'semantic-ui-react';

class ContentBody extends Component {
    render(){
        return (
            <Grid.Column stretched width={13}>
                <Switch>
                    <Route
                        exact path="/"
                        render={()=><div
                            {...this.props}>
                            ROUTE CONTENT
                        </div>}
                    />
                    <Route
                        path="/login"
                        render={()=><div
                            {...this.props}>
                            LOGIN
                        </div>}
                    />
                </Switch>
            </Grid.Column>    

        )
    }
}

export default ContentBody;