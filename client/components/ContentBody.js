import React, {Component} from 'react';

import {
    Route,
    Switch
} from 'react-router-dom';

import {
    Container,
    Segment
} from 'semantic-ui-react';

class ContentBody extends Component {
    render(){
        return (
            <Container
                style={{
                    minHeight : '75vh'
                }}
            >
                <Switch>
                    <Route
                        exact path="/"
                        render={()=><Segment
                            style={{
                                top: '3.5rem'
                            }}
                            {...this.props}>
                            ROUTE CONTENT
                        </Segment>}
                    />
                    <Route
                        path="/login"
                        render={()=><Segment
                            style={{
                                top: '3.5rem'
                            }}
                            {...this.props}>
                            LOGIN
                        </Segment>}
                    />
                </Switch>
            
            </Container>

        )
    }
}

export default ContentBody;